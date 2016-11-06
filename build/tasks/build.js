const paths       = require("../paths");
const gulp        = require("gulp");
const sequence    = require("gulp-sequence");
const babel       = require("gulp-babel");
const sass        = require("gulp-sass");
const pug         = require("gulp-pug");
const deleteLines = require('gulp-delete-lines');

gulp.task("build", sequence("clean", [
      "buildFavIcon", "buildJavascript",
      "buildHtml", "bootstrapAdditions", "buildStyles",
      "buildImages", "buildFonts",
      "buildCssDependencies"
]));

const base = { base: "./src" };

gulp.task("bootstrapAdditions", function(){
    gulp.src(paths.cssSource)
        .pipe(gulp.dest(paths.built + paths.cssDest));
});

gulp.task("buildJavascript", () => {
    return gulp.src(paths.source, base)
        .pipe(babel())
        .pipe(deleteLines({
            filters: [
                /"use strict";/g
            ]
        }))
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildHtml", () => {
    return gulp.src(paths.html)
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

gulp.task("buildCssDependencies", () => {
  return gulp.src("jspm_packages/npm/bootstrap-chosen@1.4.2/*.png")
    .pipe(gulp.dest(paths.built + "styles"));
});

gulp.task("buildImages", () => {
    return gulp.src([`${paths.root}/images/**/*`], base)
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildFonts", () => {
    return gulp.src("jspm_packages/github/twbs/bootstrap-sass@3.3.7/assets/fonts/bootstrap/**/*", {
            base: "jspm_packages/github/twbs/bootstrap-sass@3.3.7/assets"
        })
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildFavIcon", () => {
    return gulp.src("src/favicon.ico")
        .pipe(gulp.dest(paths.built));
});
