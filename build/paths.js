const fs = require("fs");

const appRoot = "src/";
const pkg     = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const paths   = {
  root:        appRoot,
  source:      ["src/app/**/*.js"],
  html:        appRoot + "**/*.pug",
  cssSource:   "jspm_packages/npm/bootstrap-additions@0.3.1/dist/**/*.css",
  cssDest:     "styles/bootstrap-additions",
  style:       appRoot + "styles/**/*.scss",
  index:       appRoot + "index.pug",
  built:       "built/",
  dist:        "dist/",
  packageName: pkg.name,
  ignore:      []
};

paths.files = [
  paths.source
];

module.exports = paths;
