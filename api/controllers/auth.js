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
    User.findOne({
            'user_id': profile.id 
        }, function(err, user) {
            if (err) {
                return callback(err);
            }
            //No user was found... so create a new user with values from Facebook (all the profile. stuff)
            if (!user) {
                user = new User({
                    'user_id': profile.id,
                    'username': profile.displayName,
                    'friends': profile.friends,
                    'picture': profile.picture
                });
                user.save(function(err) {
                    if (err) console.log(err);
                    return callback(err, user);
                });
            } else {
                //found user. Return
                return callback(err, user);
            }
        });
  }));

//== Routes & Logic. =============

controller.get('/facebook', passport.authenticate('facebook', { scope: ['user_friends'] }) );

controller.get('/facebook/callback',passport.authenticate('facebook'),
  function(req, res) {
    res.status(200).json(req.user);
  });

controller.get('/logout', function(req, res,next) {
  req.logout();
  res.status(200);
});  



//============================
module.exports = controller;