import Doctor from '../model/doctorModel.js';
export const createDoctor = async (req, res) => {
    try{
        const doctorData = Doctor(req.body);
        if(!doctorData) {
            return res.status(400).json({message: 'Doctor data not found'});
        }
        await doctorData.save();
        res.status(200).json({message: 'Doctor data created successfully'});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}


export const getAllDoctors = async (req, res) => {
    try{
        const doctor = await Doctor.find();
        if(!doctor) {
            return res.status(400).json({message: 'Doctor data not found'});
        }
        res.status(200).json(doctor);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}

export const getDoctor = async (req, res) => {
    try{
        const id = req.params.id;
        const doctor = await Doctor.findById(id);
        if(!doctor) {
            return res.status(400).json({message: 'Doctor data not found'});
        }
        res.status(200).json(doctor);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}


export const updateDoctor = async (req, res) => {
    try{
        const id = req.params.id;
        const doctor = await Doctor.findById(id);
        if(!doctor) {
            return res.status(400).json({message: 'Doctor data not found'});
        }
        res.status(200).json(doctor);
        const updatedData = await Doctor.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedData);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}

export const deleteDoctor = async (req, res) => {
    try{
        const id = req.params.id;
        const doctor = await Doctor.findById(id);
        if(!doctor) {
            return res.status(400).json({message: 'Doctor data not found'});
        }
        res.status(200).json(doctor);
        const updatedData = await Doctor.findByIdAndDelete(id, req.body, {new: true});
        res.status(200).json(updatedData);
    }catch (error){
        res.status(500).json({ message: error.message });
    }
}

// const createDoctor = async (req, res) => {
//     try{
//         const {name, specialization, phone_number, location} = Doctor(req.body);
//         const doctorData = new Doctor({
//             name,
//             specialization,
//             phone_number,
//             location
//         });
//         await doctorData.save();
//         res.status(200).json({message: 'Doctor data created successfully'});
//     }
//     catch (error){
//         res.status(500).json({ message: error.message });
//     }
// }

