/*
Sandeep Vattapparambil
sandeepv68@gmail.com
*/
//Gulp Configuration
'use strict';
//require gulp module
var gulp = require('gulp');
//require browser-sync module
var browserSync = require('browser-sync');
//require nodemon module
var nodemon = require('gulp-nodemon');
//set gulp task - default
gulp.task('default', ['browser-sync'], function() {});
//set gulp task - browser-sync
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    //Set proxy-server ip; point to the port address in ./bin/www
    //now gulp and node http-server can run in harmony
    proxy: "http://localhost:3000",
    //files to watch
    files: ["public/**/*.*"],
    //set default browser (leave blank)
    browser: "",
    //set browser-sync port
    port: 4000,
  });
  //Custom watch on views and routes
  gulp.watch('views/*.*', browserSync.reload);
  gulp.watch('routes/*.*', browserSync.reload);
});
//set gulp task - nodemon
gulp.task('nodemon', function(cb) {
  var started = false;
  return nodemon({
    //Start script
    script: './bin/www'
  }).on('start', function() {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});
