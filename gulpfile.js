var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb      = require('gulp-csscomb');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var gutil        = require('gulp-util');
var webserver    = require('gulp-webserver');
var mainBower    = require('main-bower-files');
var minifyHTML   = require('gulp-htmlmin');
var source       = require('vinyl-source-stream');
var browserify   = require('browserify');
var rename       = require('gulp-rename');
var $            = require('gulp-load-plugins')();
var streamify    = require('gulp-streamify');

//==============================
// PATHS CONFIG
//==============================
var config = {
    css: {
        src : './assets/**/*.scss',
        dest: './app/css'
    },
    js: {
        src   : './assets/js/app.js',
        dest  : './assets/js/app',
        bundle: './app/js'
    },
    html: {
        src: './index.html',
        dest: './app/'
    }
}

//==============================
// COPY BOWER COMPONENTS
//==============================
gulp.task('bower', function() {
    return gulp.src(mainBower())
                .pipe(gulp.dest('./app/lib'));
});

//==============================
// COMPILE SCSS/SASS
//==============================
gulp.task('sass', function () {
    return gulp.src(config.css.src)
                .pipe(sass().on('error', gutil.log))
                .pipe(autoprefixer({
                    browsers: ['last 3 versions']
                }))
                .pipe(concat('main.css'))
                .pipe(gulp.dest(config.css.dest));
});

//==============================
// BROWSERIFY
//==============================
gulp.task('browserify', function () {
    return browserify(config.js.src)
                .bundle().on('error', gutil.log)
                .pipe(source('bundle.js'))
                .pipe(gulp.dest(config.js.dest))

                // Minify and send to /app/js
                .pipe($.rename('bundle.min.js'))
                .pipe($.streamify($.uglify().on('error', gutil.log)))
                .pipe(gulp.dest(config.js.bundle));
});

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
                    open      : true,
                    livereload: true
                }));
});

//==============================
// DEFAULT
//==============================
gulp.task('default', ['browserify', 'sass', 'html', 'watch', 'server']);
