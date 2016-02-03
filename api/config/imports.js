// Funções para imports externos a aplicação ( Da propria maquina virtual )

module.exports = {
    getExpress: function() {
        var express = require('/home/vagrant/libs/node_modules/express/index.js');
        return express;
    },
    getBodyParser: function() {
        var bodyParser = require('/home/vagrant/libs/node_modules/body-parser/index.js');
        return bodyParser;
    },
    getCookieParser: function(){
        var cookieParser = require('/home/vagrant/libs/node_modules/cookie-parser/index.js');
        return cookieParser;
    },
    getMongoose: function(){
        var mongoose = require('/home/vagrant/libs/node_modules/mongoose/index.js');
        return mongoose;
    },
    getBoom: function(){
        var boom = require('/home/vagrant/libs/node_modules/boom/lib/index.js');
        return boom;
    },
    getJoi: function(){
        var joi = require('/home/vagrant/libs/node_modules/joi/lib/index.js');
        return joi;
    },
      getEjs: function(){
        var ejs = require('/home/vagrant/libs/node_modules/ejs/ejs.min.js');
        return ejs;
    },
      getExpressSession: function(){
        var expressSession = require('/home/vagrant/libs/node_modules/express-session/index.js');
        return expressSession;
    },
      getCrypto: function(){
        var crypto = require('/home/vagrant/libs/node_modules/crypto-js/index.js');
        return crypto;
    }

};