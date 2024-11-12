const mongoose = require("mongoose"); 

const mongo_url = "mongodb://localhost:27017/Doctor"

const connectToMongo = async () => {
    mongoose.Promise = global.Promise;
    
    try {
        await mongoose.connect(mongo_url);
        console.log("Connected to database"); 
    }
    catch( error ) {
        console.log("Cannot connect to database", error);
        process.exit();
    }
}

const DoctorModel = (() => {
    const collection_name = 'doctor';
    const collection_fields = {
        name: String, 
        specialization: String,
        location: String, 
        phone_number: Number
    };
    const collection_config = {
        timestamps: false
    };
    
    const schema = mongoose.Schema(collection_fields, collection_config);
    const Model = mongoose.model(collection_name, schema);

    return Model;
})();

const createDoctor = async () => {
    await connectToMongo();
    const doctorModel = new DoctorModel( {
        // _id : new mongoose.Types.ObjectId(),
        name: 'Dr. John Doe', 
        specialization: 'General Physician',
        location: 'New York', 
        phone_number: 1234567890
    } );
    const createdDocument = await doctorModel.save();
    console.log(createdDocument);
};

createDoctor();