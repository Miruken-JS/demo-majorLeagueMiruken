module.exports = function(config) {
  config.set({

    frameworks: ['mocha','chai'],

    files: [
      'test/**/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
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
