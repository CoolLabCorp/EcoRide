//============================
var http = require('http');
var app = require('./app');
//============================

var server = http.createServer(app);

//== Shutdown. =================
process.on('SIGTERM', function () {
  console.log("Finalizando servidor");
  app.close();
});

//============================
server.listen(app.get('port'), function(){
  console.log('Express server escutando na porta ' + app.get('port'));
});
