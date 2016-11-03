const paths = require("./build/paths");

var vendorFiles = [
        'jspm_packages/npm/moment@2.15.2/moment.js" ',
        'jspm_packages/github/angular/bower-angular@1.5.8/angular.js',
        'jspm_packages/github/miruken-es5/bower-miruken-es5-angular@1.0.2/miruken-ng-bundle.js'
    ]
var files = vendorFiles.concat(paths.source);
files.push('test/**/*.js');

module.exports = function(config) {
  config.set({

    frameworks: ['mocha','chai'],

    files: files,

    preprocessors: {
        'src/**/*.js' : ['babel'],
        'test/**/*.js': ['babel']
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}
