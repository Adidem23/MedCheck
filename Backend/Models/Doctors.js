const mongoose = require('mongoose');

const DoctorsSchema = new mongoose.Schema({
    Name:{
        type:String,
    },
    Email:{
        type:String,
        unique:true
    },
    Prescritions:{
        type:[Object]
    }
});

module.exports = mongoose.model("Doctors", DoctorsSchema);