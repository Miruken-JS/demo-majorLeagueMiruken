var fs   = require("fs");

var appRoot = "src/";
var pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

var paths = {
  root       : appRoot,
  source     : appRoot + "**/*.js",
  html       : appRoot + "**/*.html",
  style      : appRoot + "**/*.scss",
  index      : appRoot + "index.html",
  built      : "built/",
  dist       : "dist/",
  packageName: pkg.name,
  ignore     : []
};

paths.files = [
  paths.source
];

module.exports = paths;
