const paths    = require("../paths");
const gulp     = require("gulp");
const sequence = require("gulp-sequence");
const babel    = require("gulp-babel");
const sass     = require("gulp-sass");
const pug      = require("gulp-pug");

gulp.task("build", sequence("clean", ["inject", "buildJavascript", "buildHtml", "buildStyles", "buildImages"]));

const base = { base: "./src" };

gulp.task("buildJavascript", () => {
    return gulp.src(paths.source, base)
        .pipe(babel())
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildHtml", () => {
    return gulp.src(["!" + paths.index, paths.html])
    	.pipe(pug({
    		pretty: true
    	}))
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildStyles", () => {
    return gulp.src(paths.style, base)
        .pipe(sass())
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildImages", () => {
    return gulp.src([`${paths.root}/images/**/*`], base)
        .pipe(gulp.dest(paths.built));
});