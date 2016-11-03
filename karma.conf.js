module.exports = function(config) {
    config.set({
        frameworks: ['mocha','chai','jspm'],
        files: [
            'jspm_packages/npm/moment@2.15.2/moment.js',
            'jspm_packages/github/angular/bower-angular@1.5.8/angular.js',
            'jspm_packages/github/miruken-es5/bower-miruken-es5-angular@1.0.2/miruken-ng-bundle.js'
        ],
        jspm: {
            loadFiles:  ["test/**/*.js"],
            serveFiles: ["jspm_packages/**/*.js", "src/app/**/*.js"]
        },
        proxies: {
            "/jspm_packages" : "/base/jspm_packages",
            "/src":            "/base/src",
            "/test":           "/base/test"
        },
        preprocessors: {
            'src/**/*.js' : ['babel'],
            'test/**/*.js': ['babel']
        },
        reporters:   ['mocha'],
        port:        9876,
        colors:      true,
        autoWatch:   true,
        browsers:    ['Chrome'],
        singleRun:   false,
        concurrency: Infinity
    })
};
