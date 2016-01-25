//== Imports. ===================
var app = require('./config/environment');
var db = require('./config/database');
var ride = require('./controllers/ride');
var main = require('./controllers/main');
//== Startup. ===================

db.connect();
process.on('exit', function () {
    db.disconnect();
    console.log("[Server] Offline.");
});


//== Controllers & Routes. =========

app.use('/home',main);
app.use('/rides',ride);

module.exports = app;