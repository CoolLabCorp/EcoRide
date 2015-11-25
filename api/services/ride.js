var imports = require('../config/imports');
//============================
var express = imports.getExpress();
var parser = imports.getBodyParser();
var controller = express.Router();
var ride = require('../models/ride');

controller.use(parser.json());
controller.use(parser.urlencoded({extended: true}));
//============================
// Object

var collection = [];
collection.push(new ride("yuri","Natal-RN","Parnamirim","4","2015-11-24 14:00:00 -3000"));

//============================
// Logger

controller.use(function(req, res, next) {

    // log each request to the console
    console.log("Method > "+req.method, " | Internal Service path >"+req.url, " |  Services Req. Path >"+req.baseUrl, " | Requester >"+req.ip + " Collection >"+collection );

    // continue doing what we were doing and go to the route
    next(); 
});

//============================
// Routes

controller.get('/', function(req, res) {
  res.status(200).json(collection);
});

controller.post('/', function(req, res, next) {
  console.log(req.body.driver) ;
  var current_ride =new ride(req.body.driver,req.body.origin,req.body.destin,req.body.slots,req.body.timestamp);
  collection.push(current_ride);
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