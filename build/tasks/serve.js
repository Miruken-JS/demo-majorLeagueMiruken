var paths       = require("../paths");
var gulp        = require("gulp");
var browserSync = require("browser-sync");
var reload      = browserSync.reload;
var watch       = require("gulp-watch");
var plumber     = require("gulp-plumber");
var filter      = require("gulp-filter");
var batch       = require("gulp-batch");

gulp.task("serve", function () {
    browserSync({
        notify: false,
        port: 9100,
        server: {
            baseDir: paths.built,
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });
    
    watch([
        paths.built + "**/*.html",
        paths.built + "**/*.js",
        paths.built + "**/*.css"
    ], batch(function(events, done){
        reload();
        done();     
    }));
    
});
    