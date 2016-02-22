// User.js
// =================
var imports = require('../config/imports');
var mongoose = imports.getMongoose();
// =================
var userSchema = {}
// Schema -> User :

userSchema =  mongoose.Schema({
    user_id: { type: String, unique : true, required: true,dropDups: true },
    username: { type: String, required : true},
    picture: String,

    access_token: String,
    refresh_token: String,

    reputation_level: Number,
    friends: [], // Friends IDs

    last_signin: Date,
    created_at: Date,

    // Settings

    slots: Number,
    type: Number,
    color: String,
    plate: String,
    extra: String

});

 module.exports =  userSchema;
// =======END=======