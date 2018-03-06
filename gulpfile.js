/**
 * Created by DreamBoy on 2017/1/8.
 */
var init = require('./build/gulp.init.js');
var prod = require('./build/gulp.prod.js');
var dev = require('./build/gulp.dev.js');
init();
prod();
dev();