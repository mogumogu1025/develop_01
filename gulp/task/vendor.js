import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import concat  from 'gulp-concat';
import config from '../config';


const vendorJs = (done) => {
  return gulp.src(config.vendorJs.src)
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(concat('vendor.js'))
  .pipe( gulp.dest( config.vendorJs.dest ));
}

exports.vendorJs = vendorJs;