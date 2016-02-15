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
    access_token: String,
    refresh_token: String,
    reputation_level: Number,
    last_signin: Date,
    created_at: Date
});

 module.exports = userSchema;
// =======END=======