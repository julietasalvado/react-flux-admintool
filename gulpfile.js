/**
 * Created by Julieta on 25/03/2017.
 */
"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open');//Opens a URL in a web browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify'); //Tranforms Reacts JSX to JS
var source = require('vinyl-source-stream'); //use conventional text stream with Gulp
var concat = require('gulp-concat');

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        images: './src/images/*',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
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

//convert to JS
gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'));
})

//bundle css
gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
})

//migrates images to dist folder
gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    //publish fav icon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
})

//Watch files then when files changed, gulp knows and reload the browser
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html'])
    gulp.watch(config.paths.js, ['js'])
});


//Tasks that should run by default
gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);