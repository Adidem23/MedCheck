const mongoose = require('mongoose');

const PatientsSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
        unique: true
    },
    Age: {
        type: Number
    },
    Weight: {
        type: Number
    },
    MedicalHistory: {
        type: [String]
    },
    TreatedBy: {
        type: [Object]
    }
});

module.exports = mongoose.model("patients", PatientsSchema);