//var imports = require('./config/imports');
//============================
var app = require('./config/environment');
var db = require('./config/database');
var ride = require('./controllers/ride');
var main = require('./controllers/index');
//============================
var controllers = {'ride' : ride,'main':main};


// App = Express Instance, Router = Router Instance
app.on('listening', function(){
    db.connect();
    console.log("Banco de Dados Conectado.");
});
app.on('close',function(){
    db.disconnect();
    console.log("Servidor Finalizado.");
});
app.use('/home',main);
app.use('/rides',ride);

module.exports = app;
