var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', function(){
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
    });
});