var imports = require('../config/imports');
var mongoose = imports.getMongoose();
// ============
// Config Database
// ============

var db = { 
    connect: function() { mongoose.connect('mongodb://localhost/ecoride'); },
    disconnect: function() { mongoose.disconnect(); }
};

db.attributes = {
    name: "Gerência do Banco de Dados",
    version: "1.0"
}

module.exports = db;
