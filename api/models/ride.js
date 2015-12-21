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
    comments: [{ author: String,body: String, date: Date, votes: Number, rating: Number }],
    origin: String,
    destin: String,
    slots: Number,
    timestamp: Date,
    meta: {
        rating: Number,
        votes: Number
    }
});

 module.exports = rideSchema;
// =======END=======