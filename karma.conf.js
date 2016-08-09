const paths = require("./build/paths");

var bowerFiles = [
        'bower_components/moment/moment.js',
        'bower_components/angular/angular.js',
        'bower_components/miruken-angular/miruken-ng-bundle.js',
    ]
var files = bowerFiles.concat(paths.source);
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
