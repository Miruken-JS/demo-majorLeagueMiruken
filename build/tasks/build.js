var paths    = require("../paths");
var gulp     = require("gulp");
var sequence = require("gulp-sequence");
var babel    = require("gulp-babel");
var sass     = require("gulp-sass");

gulp.task("build", sequence("clean", ["inject", "buildJavascript", "buildHtml", "buildStyles"]));

gulp.task("buildJavascript", function(){
    return gulp.src(paths.source)
        .pipe(babel())
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildHtml", function(){
    return gulp.src(["!" + paths.index, paths.html])
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildStyles", function(){
    return gulp.src(paths.style)
        .pipe(sass())
        .pipe(gulp.dest(paths.built));
});
