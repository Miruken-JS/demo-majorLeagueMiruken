var paths = require('../paths');
var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('clean', function() {
  return gulp.src([paths.built, paths.dist])
    .pipe(vinylPaths(del));
});