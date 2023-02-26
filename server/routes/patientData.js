import express from "express";
import { getMyRecords, getPatientMedicalRecords } from "../controllers/patient.js";

import { verifyToken } from "../middleware/auth.js";

const patientRoutes = express.Router();

patientRoutes.get("/:_id/medicalRecords", verifyToken, getMyRecords);

export default patientRoutes;