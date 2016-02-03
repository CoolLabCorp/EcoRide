//== Controller Header  ===========
  //== Imports. ==================
  var imports = require('../config/imports');

  var express = imports.getExpress();
  var parser = imports.getBodyParser();
  var mongoose = imports.getMongoose();
  var joi = imports.getJoi();
  var controller = express.Router();

  //== Plugins ( Middleware ). =======
  controller.use(parser.json());
  controller.use(parser.urlencoded({extended: true}));

//== Controller Header end ========

//== Models. ===================

var ObjectId = require("mongoose").Types.ObjectId;
var userSchema = require('../models/user');
var User = mongoose.model('User',userSchema);

//== Memory. ==================

var collection = [];

//== Routes & Logic. =============

controller.post('/', function(req, res) {
  var newUser = new User();

  req.body.email ? newUser.email = req.body.email : newUser.email = null ;
  req.body.username ? newUser.username = req.body.username : newUser.username = null;
  req.body.password ? newUser.password = req.body.password : newUser.password = null;

 /* var promise = new Promise( function (resolve, reject) => {
    newUser.save(function(err, user) => {
      if(err) {
        reject(err);
      } else { 
        resolve(user);
      }
    });
     return promise;  
  });
  res.redirect('/user');*/

   newUser.save(function (err,user){
      if(err) return console.error(err);
    });
  res.redirect('/user');
};

controller.get('/',function(req, res) {
  // Select All
  User.find( function (err, user) {
    if (err) return console.error(err);
    // Set memory array,
    collection = user;
  });
  res.status(200).json(collection);
});

/*controller.put('/:id', function(req, res, next) {
  res.json(null);
});

controller.delete('/:id', function(req, res, next) {
  res.json(null);
});*/


//============================
module.exports = controller;