// Ride.js
// =================
var imports = require('../config/imports');
var mongoose = imports.getMongoose();
// =================
var rideSchema = {}
// Schema -> Ride :

 rideSchema =  mongoose.Schema({
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

 rideSchema.methods.getData = function() {
    var data = this.driver + " - "+meta.rating;
    // Coment bellow
    console.log(data);
 }

 module.exports = rideSchema;
// =======END=======