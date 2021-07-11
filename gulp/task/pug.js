import gulp from 'gulp';
import changed from 'gulp-changed';
import notify from "gulp-notify";
import plumber from "gulp-plumber";
import pug from "gulp-pug";


import config from '../config';

function html (done) {
  return gulp.src( config.pug.src )
    .pipe(changed(config.pug.dest))
    .pipe(
      plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
    )
    .pipe(changed( config.pug.dest ))
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest( config.pug.dest ));
}
exports.html = html;