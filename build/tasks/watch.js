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
    watchForAddedAndRemovedJavascript();
    watchIndex();
    watchJavascript();
    watchHtml();
    watchStyles();
    watchLint();
    watchImages();
});

const base = { base: "./src" };

function watchForAddedAndRemovedJavascript(){
    const sources = [...paths.source, paths.html]; 
    gulp.src(sources)
        .pipe(watch(sources))
        .pipe(plumber())
        .pipe(filter((file) => {
            return file.event === "add" || file.event === "unlink";
        }))
        .pipe(through2.obj((file, encoding, done) => {
            console.log("injecting files");
            gulp.start("inject", done);
            if(this.push){
                this.push(file);
            }
        }));
}

function watchIndex(){
    gulp.start('inject');
    return watch(paths.index, batch((events, done) => {
        gulp.start('inject', done);
    }));
}

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
    const sources = ["!" + paths.index, paths.html];
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