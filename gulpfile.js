var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb      = require('gulp-csscomb');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var gutil        = require('gulp-util');
var webserver    = require('gulp-webserver');
var minifyHTML   = require('gulp-htmlmin');
var source       = require('vinyl-source-stream');
var browserify   = require('browserify');
var rename       = require('gulp-rename');
var $            = require('gulp-load-plugins')();
var streamify    = require('gulp-streamify');
var fs           = require('fs');
var watchify     = require('watchify');
var sourcemaps   = require('gulp-sourcemaps');
var assign       = require('lodash.assign');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var mainBower    = require('main-bower-files');
var flatten      = require('gulp-flatten');
var path         = require('gulp-util');


//==============================
// PATHS CONFIG
//==============================
var config = {
    css: {
        src : './assets/**/*.scss',
        lib : './assets/scss/lib',
        dest: './app/assets/css'
    },
    js: {
        src    : './assets/js/src/',
        srcMain: './assets/js/main.js',
        dest   : './assets/js/app',
        bundle : './app/assets/js'
    },
    html: {
        src: './index.html',
        dest: './app/'
    },
    browserify: {
        debug  : true
    }
}

//==============================
// COMPILE SCSS/SASS
//==============================
gulp.task('sass', function () {
    return gulp.src(config.css.src)
                .pipe(sass().on('error', gutil.log))
                .pipe(autoprefixer({
                    browsers: ['last 3 versions', 'IE 9', 'IE 10', 'IE 11']
                }))
                .pipe(concat('main.css'))
                .pipe(gulp.dest(config.css.dest));
});

//==============================
// COPY BOWER COMPONENTS
//==============================
gulp.task('bower', function() {
    return gulp.src(mainBower('**/*.css'))
                .pipe(gulp.dest(config.css.lib));
});

gulp.task('fonts', function () {
    return gulp.src('./bower_components/**/*.{eot,svg,ttf,woff,woff2}')
                .pipe($.flatten())
                .pipe(gulp.dest('./app/assets/fonts'));
});

//==============================
// BROWSERIFY
//==============================
var customOpts = {
    entries: [config.js.srcMain],
    debug  : config.browserify.debug
};
var opts = assign({}, watchify.args, customOpts);
var b    = watchify(browserify(opts));

function bundle() {
    return b.bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
            .pipe(sourcemaps.write('./')) // writes .map file
            .pipe(gulp.dest(config.js.bundle));
}

gulp.task('browserify', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

//==============================
// MINIFY HTML
//==============================
gulp.task('html', function () {
    return gulp.src(config.html.src)
                .pipe(minifyHTML({ collapseWhitespace: true }).on('error', gutil.log))
                .pipe(gulp.dest(config.html.dest));
});

//==============================
// WATCH
//==============================
gulp.task('watch', function () {
    gulp.watch(config.html.src, ['html']);
    gulp.watch(config.css.src, ['sass']);
    gulp.watch(config.js.src, ['browserify']);
});

//==============================
// START SERVER
//==============================
gulp.task('server', function () {
    return gulp.src('./app')
                .pipe(webserver({
                    port      : '1337',
                    open      : false,
                    livereload: true
                }));
});

//==============================
// DEFAULT
//==============================
gulp.task('default', ['bower', 'fonts', 'browserify', 'sass', 'html', 'watch', 'server']);
