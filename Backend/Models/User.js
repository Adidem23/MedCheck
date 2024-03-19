const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
        unique:true
    },
    Role:{
        type:String
    }
});

module.exports = mongoose.model("Users", UserSchema);