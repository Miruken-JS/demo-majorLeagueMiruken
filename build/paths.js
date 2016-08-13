const fs = require("fs");

const appRoot = "src/";
const pkg     = JSON.parse(fs.readFileSync("./package.json", "utf-8"));

const paths   = {
  root       : appRoot,
  source     : [
    appRoot + "app/setup.js",
    appRoot + "app/domain/**/*.js",
    appRoot + "app/team/teamFeature.js",
    appRoot + "app/team/teamsController.js",
    appRoot + "app/team/teamController.js",
    appRoot + "app/team/createTeamController.js",
    appRoot + "app/team/editTeamController.js",
    appRoot + "app/team/teamHandler.js",
    appRoot + "app/team/teamHandlerMock.js",
    appRoot + "app/team/setup.js",
    appRoot + "**/*.js"
  ],
  html       : appRoot + "**/*.pug",
  style      : appRoot + "styles/style.scss",
  index      : appRoot + "index.pug",
  built      : "built/",
  dist       : "dist/",
  packageName: pkg.name,
  ignore     : []
};

paths.files = [
  paths.source
];

module.exports = paths;
