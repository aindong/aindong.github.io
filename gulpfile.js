/**
 * Created by papabear on 4/27/2015.
 */
var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify');


/* TASKS */
gulp.task('default', function()
{
    return gulp.src(['firstproject/js/*'])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('firstproject'))
        .pipe(uglify())
        .pipe(gulp.dest('firstproject'));
});