var imports = require('./imports');
//============================
var express = imports.getExpress();
//============================

var env = express();
var port = process.env.PORT || 3000;
env.set('port',port);

module.exports = env;