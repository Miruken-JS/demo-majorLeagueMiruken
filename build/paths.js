const fs = require("fs");

const appRoot = "src/";
const pkg     = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const paths   = {
  root       : appRoot,
  source     : [
    appRoot + "app/setup.js",
    appRoot + "app/domain/**/*.js",
    appRoot + "app/team/teamFeature.js",
    appRoot + "app/team/teamHandlerMock.js",
    appRoot + "app/team/setup.js",
    appRoot + "**/*.js"
  ],
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
