//== Imports. ===================
var imports = require('../config/imports');

var express = imports.getExpress();
var parser = imports.getBodyParser();
var mongoose = imports.getMongoose();

var controller = express.Router();

//== Plugins ( Middleware ). ========

controller.use(parser.json());
controller.use(parser.urlencoded({extended: true}));

//== Models. ===================

var rideSchema = require('../models/ride');
var Ride = mongoose.model('Ride',rideSchema);
var seqSchema = require('../models/seq');
var Seq = mongoose.model('rideSeq',seqSchema);

//== Memory. ==================

var collection = [];

//== Routes & Logic. =============

controller.get('/', function(req, res) {
  // Select All
  Ride.find( function (err, rides) {
    if (err) return console.error(err);
    // Set memory array,
    collection = rides;
  });
  res.status(200).json(collection);
});

controller.post('/', function(req, res, next) {
  var current_ride = new Ride();

  req.body.driver ? current_ride.driver = req.body.driver : current_ride.driver = null ;
  req.body.origin ? current_ride.origin = req.body.origin : current_ride.origin = null;
  req.body.destin ? current_ride.destin = req.body.destin : current_ride.destin = null;
  req.body.slots ? current_ride.slots = req.body.slots : current_ride.slots = null;
  req.body.timestamp ? current_ride.timestamp = req.body.timestamp : current_ride.timestamp = null;

  var sequence = new Seq();
  console.log(sequence.nextId(Seq));
  current_ride.ride_id =sequence.nextId(Seq);

  current_ride.save(function (err,ride){
    if(err) return console.error(err);
  });
  res.redirect('/rides');
});

controller.put('/:id', function(req, res, next) {
  res.json(null);
});

controller.delete('/:id', function(req, res, next) {
  res.json(null);
});


//============================
module.exports = controller;