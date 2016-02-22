// Routine.js
// =================
var imports = require('../config/imports');
var mongoose = imports.getMongoose();
// =================
var msgSchema = {}
// Schema -> Ride :

msgSchema =  mongoose.Schema({
    msg_id: { type: String, unique : true, required: true,dropDups: true },

    owner_id: Number,
    receiver_id: Number,
    text: String,

    type: Number,
    ride_id: Number,

    created_at: Date
});

 module.exports = msgSchema;
// =======END=======