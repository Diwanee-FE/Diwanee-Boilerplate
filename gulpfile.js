var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./default/default.scss')
                .pipe(sass())
                .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch('./default/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
