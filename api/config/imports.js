// Funções para imports externos a aplicação ( Da propria maquina virtual )

module.exports = {
    getExpress: function() {
        var express = require('/home/vagrant/node_modules/express/index.js');
        return express;
    },
    getBodyParser: function() {
        var bodyParser = require('/home/vagrant/node_modules/body-parser/index.js');
        return bodyParser;
    },
    getCookieParser: function(){
        var cookieParser = require('/home/vagrant/node_modules/cookie-parser/index.js');
        return cookieParser;
    },
    getMongoose: function(){
        var mongoose = require('/home/vagrant/node_modules/mongoose/index.js');
        return mongoose;
    }

};