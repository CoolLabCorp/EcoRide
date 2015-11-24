var imports = require('./imports');

var express = imports.getExpress();

module.exports = function(){
  var app = express();

  app.set('port', 3000);
  app.use(express.static('./public'));

  return app;
}
