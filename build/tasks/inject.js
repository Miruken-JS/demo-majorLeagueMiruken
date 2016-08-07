const paths   = require("../paths");
const gulp    = require("gulp");
const inject  = require("gulp-inject");
const wiredep = require("wiredep").stream;

gulp.task("inject", () => {
    const target  = gulp.src(paths.index);
    const sources = gulp.src([...paths.source, paths.style], {read: false});

    return target.pipe(inject(sources, {
            ignorePath  : paths.root,
            addRootSlash: false
        }))
    	.pipe(wiredep())
        .pipe(gulp.dest(paths.built));
});

