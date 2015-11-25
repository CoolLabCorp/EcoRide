var imports = require('./config/imports');
//============================
var app = require('./config/environment');
var ride = require('./services/ride');
var main = require('./services/index');
//============================
var controllers = {'ride' : ride,'main':main};

// App = Express Instance, Router = Router Instance
app.use('/',main);
app.use('/rides',ride);

module.exports = app;
