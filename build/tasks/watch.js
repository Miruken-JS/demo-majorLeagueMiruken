const paths    = require("../paths");
const gulp     = require("gulp");
const watch    = require("gulp-watch");
const plumber  = require("gulp-plumber");
const filter   = require("gulp-filter");
const batch    = require("gulp-batch");
const babel    = require("gulp-babel");
const sass     = require("gulp-sass");
const pug      = require("gulp-pug");
const through2 = require("through2");

gulp.task("watch", () => {
    watchJavascript();
    watchHtml();
    watchStyles();
    watchLint();
    watchImages();
});

const base = { base: "./src" };

function watchLint(){
    return watch([...paths.source, "test/**/*.js", "build/**/*.js"], batch((events, done) => {
        gulp.start('lint', done);
    }));
}

function watchJavascript(){

    return gulp.src(paths.source, base)
        .pipe(watch(paths.source, base))
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(paths.built));
}

function watchHtml(){
    const sources = paths.html;
    return gulp.src(sources)
        .pipe(watch(sources))
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(paths.built));
}

function watchStyles(){
    return watch("src/**/*.scss", batch((events, done) => {
        gulp.start('buildStyles', done);
    }));
}

function watchImages(){
    const sources = [`${paths.root}/images/**/*`];
    return watch(sources, batch((events, done) => {
        gulp.start('buildImages', done);
    }));
}
