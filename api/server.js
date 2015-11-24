var http = require('http');
var api = require('./config/express')();

http.createServer(api).listen(api.get('port'), function(){
  console.log('Express server escutando na porta ' + api.get('port'));
});
