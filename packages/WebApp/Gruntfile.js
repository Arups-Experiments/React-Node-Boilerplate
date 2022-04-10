const webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        configFile: '.eslintrc',
      },
      target: ['src/**/*.js'],
    },
    copy: {
      main: {
        files: [{ expand: true, cwd: 'dist', src: '**', dest: 'public/dist/' }],
      },
    },
    webpack: {
      options: {
        stats: {
          colors: true,
          performance: false,
        },
      },
      prod: webpackConfig,
      dev: Object.assign(webpackConfig, { watch: false, mode: 'development' }),
    },
    clean: ['dist', 'public'],
    watch: {
      scripts: {
        files: [
          'src/**/*.js',
          'server.js',
          'Gruntfile.js',
          'webpack.config.js',
        ],
        tasks: ['build'],
        options: {
          interrupt: true,
          debounceDelay: 250,
          reload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('build', ['clean', 'webpack', 'copy' /*, 'watch'*/]);
};
