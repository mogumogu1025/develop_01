import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import changed from 'gulp-changed';
import sassGlob from 'gulp-sass-glob';


import config from '../config';

function sass_compile (done) {
  const plugin = [
    autoprefixer({
      cascade: false
    })
  ];
  return gulp.src( config.sass.src )
    .pipe(sassGlob())
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(changed( config.sass.dest ))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss(plugin))
    .pipe(gulp.dest( config.sass.dest ));
    
}
exports.sass_compile = sass_compile;
