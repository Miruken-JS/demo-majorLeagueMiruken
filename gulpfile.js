var gulp = require("gulp");
require("require-dir")("build/tasks");

gulp.task("default",["inject", "lint"], function(){

});