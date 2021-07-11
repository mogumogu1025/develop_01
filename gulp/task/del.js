import gulp from 'gulp';
import del from 'del';


import config from '../config';

function clean (done) {
  return del([
    config.clean.path + '/assets/images/**/*',
    ],{force: true})
}
exports.clean = clean;

