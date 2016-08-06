const paths      = require('../paths');
const gulp       = require('gulp');
const del        = require('del');
const vinylPaths = require('vinyl-paths');

gulp.task('clean', () => {
 	return gulp.src([paths.built, paths.dist])
    	.pipe(vinylPaths(del));
});