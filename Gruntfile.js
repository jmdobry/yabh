/*
 * yabh
 * http://github.com/jmdobry/yabh
 *
 * Copyright (c) 2015 Jason Dobry <http://jmdobry.github.io/yabh/>
 * Licensed under the MIT license. <https://github.com/jmdobry/yabh/blob/master/LICENSE>
 */
module.exports = function (grunt) {
  'use strict';

  require('jit-grunt')(grunt, {
    coveralls: 'grunt-karma-coveralls',
    instrument: 'grunt-istanbul',
    storeCoverage: 'grunt-istanbul',
    makeReport: 'grunt-istanbul'
  });
  require('time-grunt')(grunt);

  var webpack = require('webpack');
  var pkg = grunt.file.readJSON('package.json');
  var banner = 'yabh\n' +
    '@version ' + pkg.version + ' - Homepage <http://jmdobry.github.io/yabh/>\n' +
    '@author Jason Dobry <jason.dobry@gmail.com>\n' +
    '@copyright (c) 2015 Jason Dobry \n' +
    '@license MIT <https://github.com/jmdobry/yabh/blob/master/LICENSE>\n' +
    '\n' +
    '@overview Yet another Binary Heap.';

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    clean: {
      coverage: ['coverage/'],
      dist: ['dist/']
    },
    uglify: {
      main: {
        options: {
          sourceMap: true,
          sourceMapName: 'dist/yabh.min.map',
          banner: '/**\n' +
          '* @author Jason Dobry <jason.dobry@gmail.com>\n' +
          '* @file yabh.min.js\n' +
          '* @version <%= pkg.version %> - Homepage <http://jmdobry.github.io/yabh/>\n' +
          '* @copyright (c) 2015 Jason Dobry\n' +
          '* @license MIT <https://github.com/jmdobry/yabh/blob/master/LICENSE>\n' +
          '*\n' +
          '* @overview Yet another Binary Heap.\n' +
          '*/\n'
        },
        files: {
          'dist/yabh.min.js': ['dist/yabh.js']
        }
      }
    },
    webpack: {
      dist: {
        entry: './src/index.js',
        output: {
          filename: './dist/yabh.js',
          libraryTarget: 'umd',
          library: 'BinaryHeap'
        },
        module: {
          preLoaders: [
            {
              test: /(src)(.+)\.js$|(test)(.+)\.js$/, // include .js files
              exclude: /node_modules/, // exclude any and all files in the node_modules folder
              loader: "jshint-loader?failOnHint=true"
            }
          ],
          loaders: [
            { test: /(src)(.+)\.js$/, exclude: /node_modules/, loader: 'babel-loader?blacklist=useStrict' }
          ]
        },
        plugins: [
          {
            apply: function (compiler) {
              compiler.plugin('compilation', function (compilation) {
                compilation.plugin('optimize-chunk-assets', function (chunks, callback) {
                  chunks.forEach(function (chunk) {
                    if (chunk.initial) {
                      chunk.files.forEach(function (file) {
                        compilation.assets[file].children[0].children[0]._value = compilation.assets[file].children[0].children[0]._value.replace('define(factory)', 'define("yabh", factory)');
                      });
                    }
                  });
                  callback();
                });
              });
            }
          },
          new webpack.BannerPlugin(banner)
        ]
      }
    },
    karma: {
      options: {
        configFile: './karma.conf.js'
      },
      min: {
        browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        options: {
          files: [
            'dist/yabh.min.js',
            'test/*.test.js'
          ]
        }
      },
      ci: {
        browsers: ['Chrome', 'Firefox', 'PhantomJS']
      }
    },
    coveralls: {
      options: {
        coverage_dir: 'coverage'
      }
    },
    mochaTest: {
      all: {
        options: {
          reporter: 'spec'
        },
        src: ['mocha.start.js', 'test/*.test.js']
      }
    }
  });

  grunt.registerTask('n', ['mochaTest']);
  grunt.registerTask('b', ['karma:ci', 'karma:min']);

  grunt.registerTask('test', ['build', 'n', 'b']);
  grunt.registerTask('build', [
    'clean',
    'webpack',
    'uglify'
  ]);
  grunt.registerTask('default', ['build']);
};
