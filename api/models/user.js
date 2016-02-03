// User.js
// =================
var imports = require('../config/imports');
var mongoose = imports.getMongoose();
var joi = imports.getJoi();
// =================
var userSchema = {}
// Schema -> User :

userSchema =  mongoose.Schema({Joi.object().keys({
    email: joi.string().email().unique().required(),
    username: joi.string().alphanum().min(3).max(30).required(), 
    password: joi.string().regex(/[a-zA-Z0-9\@\*]{3,10}/).required(),
    nick: joi.string(),
    status: joi.string(),
    friends: joi.array(),
    requests: joi.array(),
    blocked_friends: joi.array(),
    avatar: joi.string()
    });
});

 module.exports = userSchema;
 // =======END=======