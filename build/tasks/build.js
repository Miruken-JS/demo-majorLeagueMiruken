const paths    = require("../paths");
const gulp     = require("gulp");
const sequence = require("gulp-sequence");
const babel    = require("gulp-babel");
const sass     = require("gulp-sass");
const pug      = require("gulp-pug");

gulp.task("build", sequence("clean", [
      "inject", "buildFavIcon", "buildJavascript",
      "buildHtml", "buildStyles", 
      "buildImages", "buildFonts",
      "buildCssDependencies"
]));

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

gulp.task("buildCssDependencies", () => {
  return gulp.src("bower_components/bootstrap-chosen/*.png")
    .pipe(gulp.dest(paths.built + "styles"));
});

gulp.task("buildImages", () => {
    return gulp.src([`${paths.root}/images/**/*`], base)
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildFonts", () => {
    return gulp.src("bower_components/bootstrap-sass/assets/fonts/bootstrap/**/*", {
            base: "./bower_components/bootstrap-sass/assets"
        })
        .pipe(gulp.dest(paths.built));
});

gulp.task("buildFavIcon", () => {
    return gulp.src("src/favicon.ico")
        .pipe(gulp.dest(paths.built));
});