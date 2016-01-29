//var imports = require('./config/imports');
//============================
var app = require('./config/environment');
var db = require('./config/database');
//============================
// Controllers
var ride = require('./controllers/ride');
var main = require('./controllers/main');
//============================
var controllers = {'ride' : ride,'main':main};


// App = Express Instance, Router = Router Instance
db.connect();
process.on('exit', function () {
    db.disconnect();
    console.log("[Server] Offline.");
});

process.on('uncaughtException', function(ex) {
    console.log(ex);
});


app.use('/home',main);
app.use('/rides',ride);

module.exports = app;
