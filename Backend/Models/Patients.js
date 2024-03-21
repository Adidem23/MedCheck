const mongoose = require('mongoose');

const PatientsSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
        unique: true
    },
    ImageURL: {
        type: String
    },
    FilledProfile: {
        type: Boolean
    },
    Age: {
        type: Number
    },
    BloodGroup: {
        type: String
    },
    Weight: {
        type: Number
    },
    Allergy:{
     type:[String]
    },
    MedicalHistory: {
        type: [String]
    },
    TreatedBy: {
        type: [Object]
    },
    MedicinesGiven: {
        type: [String]
    }
});

module.exports = mongoose.model("patients", PatientsSchema);