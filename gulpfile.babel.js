import gulp from'gulp';
import {copy} from './gulp/task/copy'
import {clean} from './gulp/task/del'
import {sass_compile} from './gulp/task/sass'
import {server} from './gulp/task/server'
import {watchFile} from './gulp/task/watch'
import {scriptBandle} from './gulp/task/webpack'
import {html} from './gulp/task/pug'
import {script} from './gulp/task/script'
import {vendorJs} from './gulp/task/vendor'

exports.default = gulp.series(clean, gulp.parallel( sass_compile, copy, html, script, vendorJs), server, watchFile);