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

var config = {
    css: {
        src : './assets/**/*.scss',
        dest: './app/css'
    },
    js: {
        src   : './assets/js/*.js',
        dest  : './assets/js/app',
        bundle: './assets/js/app/bundle.js'
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
// UGLIFY SCRIPTS
//==============================
gulp.task('script', function () {
    return gulp.src(config.js.bundle)
                .pipe(uglify().on('error', gutil.log))
                .pipe(gulp.dest('./app/js/min'));
});

//==============================
// BROWSERIFY
//==============================
gulp.task('browserify', ['script'], function () {
    return browserify('./assets/js/main.js')
                .bundle().on('error', gutil.log)
                .pipe(source('bundle.js'))
                .pipe(gulp.dest(config.js.dest));
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
gulp.task('default', ['browserify', 'script', 'sass', 'html', 'watch', 'server']);
