// Karma configuration
// Generated on Thu Dec 20 2018 22:30:40 GMT+0800 (CST)
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'tests/**/*.spec.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*.spec.js': ['webpack', 'sourcemap']
    },

    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-coverage-istanbul-reporter'
    ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.js$/,
          use: {
            loader: 'istanbul-instrumenter-loader',
            options: { esModules: true }
          },
          enforce: 'pre',
          exclude: /node_modules|\.spec\.js$/
        }, {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import', 'istanbul']
          }
        }, {
          test: /\.vue$/,
          loader: 'vue-loader'
        }]
      },
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
          'static': path.resolve(__dirname, '../static') // 增加这一行代码
        }
      }
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage-istanbul'],
    // 配置覆盖率报告的查看方式配置
    coverageIstanbulReporter: {
      // 可以用什么形式展示 支持以下格式：clover、cobertura、html、json-summary、json、lcov、lcovonly、none、teamcity、text-lcov、text-summary、text
      // 可以看连接 : https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
      reports: ['html', 'text-summary'],
      // 结果存放的位置
      dir: 'coverage/',
      // 如果使用webpack和预加载器，可以绕过webpack打破源路径
      fixWebpackSourcePaths: true,
      // 停止输出消息，如`File [$ {filename}]忽略，没有任何东西可以映射
      skipFilesWithNoCoverage: true,
      // 大多数记录接受额外的配置选项。 你可以通过`report-config`选项传递这些
      'report-config': {
        // 配置html
        html: {
          // 输出到 ./coverage/html
          subdir: 'html'
        }
      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}