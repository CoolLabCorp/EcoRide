var imports = require('./config/imports');
//============================
var app = require('./config/environment');
var ride = require('./controllers/ride');
var main = require('./controllers/index');
//============================
var controllers = {'ride' : ride,'main':main};

// App = Express Instance, Router = Router Instance
app.use('/home',main);
app.use('/rides',ride);

module.exports = app;
