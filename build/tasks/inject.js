var paths  = require("../paths");
var gulp   = require("gulp");
var inject = require("gulp-inject");
var wiredep = require("wiredep").stream;

gulp.task("inject", function () {
    var target  = gulp.src(paths.index);
    var sources = gulp.src([paths.source, paths.style], {read: false});

    return target.pipe(inject(sources, {
            ignorePath  : paths.root,
            addRootSlash: false
        }))
    	.pipe(wiredep())
        .pipe(gulp.dest(paths.built));
});

