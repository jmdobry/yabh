module.exports = function (config) {
  config.set({
    basePath: './',
    frameworks: ['chai', 'mocha'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher'
    ],
    autoWatch: false,
    autoWatchBatchDelay: 4000,
    browsers: ['PhantomJS'],
    files: [
      'dist/yabh.js',
      'test/*.test.js'
    ],
    port: 9876,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,
    captureTimeout: 30000,
    singleRun: true
  })
}
