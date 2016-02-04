//var imports = require('./config/imports');
//============================
var app = require('./config/environment');
var db = require('./config/database');
/*var imports = require('../config/imports');
var express =  imports.getExpress();
var strategy =  imports.getFacebook().Strategy;*/
//============================
// Controllers
var user = require('./controllers/user');
var ride = require('./controllers/ride');
var main = require('./controllers/main');
//============================
var controllers = {'user' : user, 'ride' : ride,'main':main};


// App = Express Instance, Router = Router Instance
db.connect();
process.on('exit', function () {
    db.disconnect();
    console.log("[Server] Offline.");
});

process.on('uncaughtException', function(ex) {
    console.log(ex);
});

//Facebook Login

/*var userSchema = require('../models/user');
var User = mongoose.model('User',userSchema);

passport.use(new FacebookStrategy({
    clientID: 457850677753412,
    clientSecret: ce726f55f10dd9e2ddc22fe3fed9858d,
    callbackURL: "http://192.168.24.69:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    var user = {
        email: profile.emails[0],
        accessToken: accessToken,
        refreshToken: refreshToken.
        cb: cb
    };

    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

passport.get('/auth/facebook',
  passport.authenticate('facebook'));

passport.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/home' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });*/


app.use('/home',main);
app.use('/rides',ride);
app.use('/user',user);

module.exports = app;
