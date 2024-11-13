import express from 'express';
import {createDoctor, getAllDoctors, getDoctor, updateDoctor, deleteDoctor} from '../controller/doctorController.js';

const route = express.Router();
route.post('/create', createDoctor);
route.get('/getall', getAllDoctors);
route.get('/getone/:id', getDoctor);
route.put('/update/:id', updateDoctor);
route.delete('/delete/:id', deleteDoctor);
export default route;