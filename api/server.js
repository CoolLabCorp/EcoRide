//============================
var http = require('http');
var main = require('./app');
//============================
var server = http.createServer(main);
//============================
server.listen(main.get('port'), function(){
  console.log('Express server escutando na porta ' + main.get('port'));
});
