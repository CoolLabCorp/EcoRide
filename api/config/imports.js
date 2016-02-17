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
    }, // PASSPORT AUTH -----------------------------------------
    getPassport: function(){
        var passport = require('/home/vagrant/libs/node_modules/passport/lib/index.js');
        return passport;
    },
    getPOAuth: function(){
        var oauth = require('/home/vagrant/libs/node_modules/passport-oauth/lib/index.js').OAuth2Strategy;
        return oauth;
    },
    getPassportFacebookStrategy: function(){
        var pface = require('/home/vagrant/libs/node_modules/passport-facebook/lib/index.js').Strategy;
        return pface;
    },
    getPassportGoogle: function(){
        var pgoogle = require('/home/vagrant/libs/node_modules/passport-google-oauth2/lib/index.js').Strategy;
        return pgoogle;
    }, // PASSPORT AUTH -----------------------------------------
    getExpressSession: function(){
        var es = require('/home/vagrant/libs/node_modules/express-session/index.js');
        return es;
    },
    getMongoSessionStore: function(){
        var msstore = require('/home/vagrant/libs/node_modules/connect-mongo/index.js');
        return msstore;
    }

};