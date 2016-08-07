/**
 * Created by Admin on 8/6/2016.
 */
var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', function() {
    return bower("./bower_components/")
        .pipe(gulp.dest('lib/'));
});

gulp.run('bower');