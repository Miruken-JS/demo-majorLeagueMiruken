const paths  = require("../paths");
const gulp   = require("gulp");
const eslint = require("gulp-eslint");

gulp.task("lint", () => {
    return gulp.src(["gulpfile.js", "build/**/*.js", "src/**/*.js", "test/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});