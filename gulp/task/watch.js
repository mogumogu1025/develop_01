import gulp from 'gulp';
import config from '../config';
import {reload} from './server';
import {sass_compile} from './sass';
//import {scriptBandle} from './webpack';
import {copy} from './copy';
import {html} from './pug'
import {script} from './script'


function watchFile(done) {
  gulp.watch(config.watch.src + 'sass/**/*.scss', gulp.series(sass_compile));
  //gulp.watch(config.watch.src + 'script/**/*.js', gulp.series(scriptBandle));
  gulp.watch(config.watch.src + 'js/**/*.js', gulp.series(script));
  gulp.watch(config.watch.src + 'pug/**/*.pug', gulp.series(html));
  gulp.watch(config.watch.src + 'images/**/*.+(jpg|jpeg|png|gif)', gulp.series(copy));
  gulp.watch(config.watch.dest + 'assets/css/**/*.css', gulp.series(reload));
  gulp.watch(config.watch.dest + 'assets/js/**/*.js', gulp.series(reload));
  gulp.watch(config.watch.dest + 'assets/images/**/*', gulp.series(reload));
  gulp.watch(config.watch.dest + '**/*.html', gulp.series(reload));
  
  done();
}

exports.watchFile = watchFile;