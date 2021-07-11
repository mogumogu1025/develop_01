import gulp from 'gulp';
import notify from "gulp-notify";
import plumber from "gulp-plumber";


import config from '../config';

function copy (done) {
  return gulp.src( config.copy.src, { base: 'src' } )
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(gulp.dest( config.copy.dest ));
}
exports.copy = copy;