const paths    = require("../paths");
const gulp     = require("gulp");
const sequence = require("gulp-sequence");
const babel    = require("gulp-babel");
const sass     = require("gulp-sass");

gulp.task("build", sequence("clean", ["inject", "buildJavascript", "buildHtml", "buildStyles"]));

gulp.task("buildJavascript", () => {
    return gulp.src(paths.source, { base: "./src"})
        .pipe(babel())
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildHtml", () => {
    return gulp.src(["!" + paths.index, paths.html])
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildStyles", () => {
    return gulp.src(paths.style)
        .pipe(sass())
        .pipe(gulp.dest(paths.built));
});

;
