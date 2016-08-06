var paths       = require("../paths");
var gulp        = require("gulp");
var watch       = require("gulp-watch");
var plumber     = require("gulp-plumber");
var filter      = require("gulp-filter");
var batch       = require("gulp-batch");
var babel       = require("gulp-babel");
var sass        = require("gulp-sass");
var through2    = require("through2");

gulp.task("watch", function () {
    watchForInject();   //g
    watchIndex();       //g
    watchJavascript();  //g
    watchHtml();        //g
    watchStyles();      //g
});

function watchForInject(){
    var sources = [paths.source, paths.html, paths.style] 
    gulp.src(sources)
        .pipe(watch(sources))
        .pipe(plumber())
        .pipe(filter(function (file) {
            return file.event === "add" || file.event === "unlink";
        }))
        .pipe(through2.obj(function(file, encoding, done){
            gulp.start("inject", done);
            this.push(file);
        }));
}

function watchIndex(){
    gulp.start('inject');
    return watch(paths.index, batch(function (events, done) {
        gulp.start('inject', done);
    }))
}

function watchJavascript(){
    return gulp.src(paths.source)
        .pipe(watch(paths.source))
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(paths.built));
}

function watchHtml(){
    var sources = ["!" + paths.index, paths.html];
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
