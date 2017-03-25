/**
 * Created by Julieta on 25/03/2017.
 */
"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open');//Opens a URL in a web browser

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
}

//--- Tasks ---

//Starts a local development server
gulp.task('connect', function () {
    connect.server( {
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open('', {url:  config.devBaseUrl + ':' + config.port + '/'}));
});

//Handles html files and bundles
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist)) //put html files in destination folder
        .pipe(connect.reload()); //and reload
});

//Watch files then when files changed, gulp knows and reload the browser
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html'])
});


//Tasks that should run by default
gulp.task('default', ['html', 'open', 'watch']);