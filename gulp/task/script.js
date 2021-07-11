import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import removeUseStrict from 'gulp-remove-use-strict';
import config from '../config';


const script = (done) => {
  return gulp.src(config.script.src)
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(babel({
     presets: ['@babel/env']
  }))
  .pipe(concat('bandle.js'))
  .pipe(removeUseStrict())
  .pipe( gulp.dest( config.script.dest ));
}

exports.script = script;