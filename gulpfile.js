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
        src : './assets/js/*.js',
        dest: './app/js/min'
    },
    html: {
        src: './index.html',
        dest: './app/'
    }
}

gulp.task('bower', function() {
    return gulp.src(mainBower())
                .pipe(gulp.dest('./app/lib'));
});

gulp.task('sass', function () {
    return gulp.src(config.css.src)
                .pipe(sass().on('error', gutil.log))
                .pipe(autoprefixer({
                    browsers: ['last 3 versions']
                }))
                .pipe(concat('main.css'))
                .pipe(gulp.dest(config.css.dest));
});

gulp.task('script', function () {
    return gulp.src(config.js.src)
                .pipe(uglify().on('error', gutil.log))
                .pipe(gulp.dest(config.js.dest));
});

gulp.task('html', function () {
    return gulp.src(config.html.src)
                .pipe(minifyHTML({ collapseWhitespace: true }).on('error', gutil.log))
                .pipe(gulp.dest(config.html.dest));
});

gulp.task('browserify', function () {
    return browserify('./assets/js/main.js')
                .bundle().on('error', gutil.log)
                .pipe(source('bundle.js'))
                .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', function () {
    gulp.watch(config.css.src, ['sass']);
    gulp.watch(config.js.src, ['script']);
});

gulp.task('server', function () {
    return gulp.src('./')
                .pipe(webserver({
                    port      : '1337',
                    open      : true,
                    livereload: true
                }));
});

gulp.task('default', ['browserify', 'sass', 'script', 'html', 'watch', 'server']);
