// User.js
// =================
var imports = require('../config/imports');
var mongoose = imports.getMongoose();
// =================
var userSchema = {}
// Schema -> User :

userSchema =  mongoose.Schema({
    email: String { type: String, unique : true, required: true,dropDups: true },
    nome: String { type: String, required: true}, 
    password: String { type: String, required: true},
    nick: String,
    status: String,
    friends: Array,
    requests: Array,
    blocked_friends: Array,
    avatar: String
});

/*userSchema =  mongoose.Schema({
    email: { unique : true, required: true,dropDups: true },
    accessToken: { required: true}, 
    refreshToken: { required: true},
    cb: {required: true}
});*/


 module.exports = userSchema;
 // =======END=======