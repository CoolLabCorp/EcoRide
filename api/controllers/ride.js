//== Controller Header  ===========
  //== Imports. ==================
  var imports = require('../config/imports');

  var express = imports.getExpress();
  var parser = imports.getBodyParser();
  var mongoose = imports.getMongoose();
  var controller = express.Router();

  //== Plugins ( Middleware ). =======
  controller.use(parser.json());
  controller.use(parser.urlencoded({extended: true}));

//== Controller Header end ========

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
    res.status(200).json(collection);
  });
});

controller.get('/:id(\\d+)/', function(req, res) {
  Ride.findOne({ride_id: req.params.id}, function (err, ride){
    if(err) console.error(err);    
    collection = [];
    ride ? collection.push(ride) : collection.push("empty");
    res.status(200).json(collection);
  })
});

controller.post('/', function(req, res,next) {
  var current_ride = new Ride();

  req.body.driver ? current_ride.driver = req.body.driver : current_ride.driver = null ;
  req.body.origin ? current_ride.origin = req.body.origin : current_ride.origin = null;
  req.body.destin ? current_ride.destin = req.body.destin : current_ride.destin = null;
  req.body.slots ? current_ride.slots = req.body.slots : current_ride.slots = null;
  req.body.timestamp ? current_ride.timestamp = req.body.timestamp : current_ride.timestamp = null;

  // Sync forced flow for query and setting next ID
  var sequence = new Seq();
  sequence.nextId(Seq).next( function (rideId) {
    current_ride.ride_id = rideId;  
    current_ride.save(function (err,ride){
      if(err) return console.error(err);
    });
    res.redirect('/rides');
  });  
});

controller.put('/:id', function(req, res, next) {
  Ride.findOne({ride_id: req.params.id}, function (err, current_ride){
    if(err) console.error(err);
    if(current_ride.length < 1)
      collection.push("not found");
    else
    {
      if (req.body.driver) current_ride.driver = req.body.driver;
      if (req.body.origin) current_ride.origin = req.body.origin;
      if (req.body.destin) current_ride.destin = req.body.destin;
      if (req.body.slots) current_ride.slots = req.body.slots;
      if (req.body.timestamp) current_ride.timestamp = req.body.timestamp;      
      Ride.update(current_ride);
    }
    res.redirect('/rides/'+req.params.id+'/');
  });
});

controller.delete('/:id', function(req, res, next) {
  Ride.remove({ride_id: req.params.id}, function (err, current_ride){
    if(err) console.error(err);    
    collection=[];
    collection.push({"Removido": current_ride });
    res.redirect('/rides/'+req.params.id+'/');
  });
});


//============================
module.exports = controller;