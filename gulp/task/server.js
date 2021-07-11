
import browserSync from 'browser-sync';
import config from '../config';

function server(done) {
  browserSync.init({
    server: {
       baseDir: config.server.path,
       index: 'index.html'
    }
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

exports.server = server;
exports.reload = reload;
