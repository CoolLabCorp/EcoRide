var imports = require('./config/imports');
var mongoose = imports.getMongoose();
var db = {};
// ============
// Config Database
// ============
db.connection = function (server, options, next) {
    server.on('start', () => {
        mongoose.connect('mongodb://localhost/');
    });

    server.on('stop', () => {
        mongoose.disconnect();
    });

    next();
};

db.connection.attributes = {
    name: "Gerência do Banco de Dados",
    version: "1.0"
}

module.exports = db;
