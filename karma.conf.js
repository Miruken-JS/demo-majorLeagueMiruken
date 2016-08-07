const paths = require("./build/paths");

module.exports = function(config) {
  config.set({

    frameworks: ['mocha','chai'],

    files: [
        'bower_components/moment/moment.js',
        'bower_components/angular/angular.js',
        'bower_components/miruken-angular/miruken-ng-bundle.js',
        'src/app/setup.js',
        'src/**/*.js',
        'test/**/*.js'
    ],

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
