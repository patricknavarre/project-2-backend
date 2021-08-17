const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        trim: true,
        required: true,
    },
    lastName: {
        type: String, 
        trim: true,
        required: true,
    },
    dateOfBirth: {
        type: String, 
        trim: true,
        required: true,
    },
    city: {
        type: String, 
        trim: true,
        required: true,
    },
    email: {
        type: String, 
        trim: true,
        required: true,
    },
    phoneNumber: {
        type: String, 
        trim: true,
        required: true,
    },
});

module.exports = mongoose.model('application', ApplicationSchema)