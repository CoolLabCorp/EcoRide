// User.js
// =================
var imports = require('../config/imports');
var mongoose = imports.getMongoose();
// =================
var userSchema = {}
// Schema -> User :

userSchema =  mongoose.Schema({
    email: { type: String, unique : true, required: true,dropDups: true },
    username: { type: String, required: true}, 
    password: { type: String, required: true},
    nick: String,
    status: String,
    friends: Array,
    requests: Array,
    blocked_friends: Array,
    avatar: String
});

 module.exports = userSchema;
 // =======END=======