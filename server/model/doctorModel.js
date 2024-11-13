import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    specialization: {type: String, required: true},
    location: {type: String, required: true},
    phone_number: {type: Number, required: true},
})

export default mongoose.model('Doctor', doctorSchema);