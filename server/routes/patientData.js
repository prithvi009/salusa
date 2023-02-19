import express from "express";
import { getPatientMedicalRecords, getPatientMedicalRecordsByDate } from "../controllers/patient.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:patientId/medicalRecords",verifyToken, getPatientMedicalRecords);

export default router;