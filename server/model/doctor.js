const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    id: {type: Number, required: true,unique:true}, 
    name: {type: String, required: true},
    specialization: {type: String, required: true},
    location: {type: String, required: true},
    phone_number: {type: Number, required: true},
})

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;