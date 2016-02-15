//== Controller Header  ===========
  //== Imports. ==================
  var imports = require('../config/imports');

  var express = imports.getExpress();
  var parser = imports.getBodyParser();
  var mongoose = imports.getMongoose();
  var controller = express.Router();
  var passport = imports.getPassport();
  var FacebookStrategy = imports.getPassportFacebookStrategy();

  //== Plugins ( Middleware ). =======

  controller.use(parser.json());
  controller.use(parser.urlencoded({extended: true}));

//== Controller Header end ========


//== Models. ===================

var userSchema = require('../models/user');
var User = mongoose.model('User',userSchema);

//== Passport Configuration. ==================

passport.use(new FacebookStrategy(
  {
   clientID: '952127641546969',
   clientSecret: "c9ab5cb9961e0cd4b404fffe64e54de0",
   callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, callback) 
  {
    // Loggin Working
    /*User.findOrCreate(, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });*/
    console.log(callback);
  }));

//== Routes & Logic. =============

controller.get('/facebook', passport.authenticate('facebook', { scope: ['user_friends'] }) );

controller.get('/facebook/callback',passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }),
  function(req, res) {
    console.log(res);
  res.redirect('/');
});

controller.get('/logout', function(req, res,next) {
  
});  



//============================
module.exports = controller;