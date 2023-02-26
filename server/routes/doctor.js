import express from 'express';
import { addPatientRecord } from '../controllers/doctor.js';
import { verifyToken } from '../middleware/auth.js';


const doctorRoutes = express.Router();

doctorRoutes.post("/:_id/addMedicalRecord", verifyToken, addPatientRecord);

export default doctorRoutes;