import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpackStream from "webpack-stream";
import webpack from "webpack";

import config from '../config';
// webpackの設定ファイルの読み込み
import webpackConfig from "../../webpack.config.js";


const scriptBandle = (done) => {
  return webpackStream(webpackConfig, webpack)
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe( gulp.dest( config.webpack.dest ));
}

exports.scriptBandle = scriptBandle;