const paths    = require("../paths");
const gulp     = require("gulp");
const watch    = require("gulp-watch");
const plumber  = require("gulp-plumber");
const filter   = require("gulp-filter");
const batch    = require("gulp-batch");
const babel    = require("gulp-babel");
const sass     = require("gulp-sass");
const through2 = require("through2");

gulp.task("watch", () => {
    watchForInject();
    watchIndex();
    watchJavascript();
    watchHtml();
    watchStyles();
});

function watchForInject(){
    const sources = [paths.source, paths.html, paths.style]; 
    gulp.src(sources)
        .pipe(watch(sources))
        .pipe(plumber())
        .pipe(filter((file) => {
            return file.event === "add" || file.event === "unlink";
        }))
        .pipe(through2.obj((file, encoding, done) => {
            gulp.start("inject", done);
            this.push(file);
        }));
}

function watchIndex(){
    gulp.start('inject');
    return watch(paths.index, batch((events, done) => {
        gulp.start('inject', done);
    }));
}

function watchJavascript(){
    return gulp.src(paths.source)
        .pipe(watch(paths.source))
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(paths.built));
}

function watchHtml(){
    const sources = ["!" + paths.index, paths.html];
    return gulp.src(sources)
        .pipe(watch(sources))
        .pipe(plumber())
        .pipe(gulp.dest(paths.built));
}

function watchStyles(){
    return gulp.src(paths.style)
            .pipe(watch(paths.style))
            .pipe(plumber())
            .pipe(sass())
            .pipe(gulp.dest(paths.built));
}
