module.exports = function(config) {
  config.set({

    frameworks: ['mocha','chai'],

    files: [
        'test/**/*.js'
    ],

    preprocessors: {
        'test/**/*.js': ['babel']
    },

    babelPreprocessor: {
        options: {
            presets: ['es2015']
        }
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: true,

    concurrency: Infinity
  })
}
