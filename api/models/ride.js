// Ride.js
// =================
var imports = require('../config/imports');
var mongoose = imports.getMongoose();
// =================
var rideSchema = {}
// Schema -> Ride :

rideSchema =  mongoose.Schema({
    ride_id: { type: String, unique : true, required: true,dropDups: true },
    driver: String,

    origin: String,
    destin: String,
    slots: Number,
    date: Date,

    type: Number, // Request or Offer

    comments: 
    [{ 
        author: String,
        body: String,
        date: Date,
        votes: Number,
        rating: Number 
    }],
    
    created_at: Date,
    
    meta: {
        abstract: Boolean,
    }
});

 module.exports = rideSchema;
// =======END=======