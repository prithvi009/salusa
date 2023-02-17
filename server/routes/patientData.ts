import express from "express";
import { getPatientMedicalRecords, getPatientMedicalRecordsByDate } from "../controllers/patient";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

router.get("/:patientId/medicalRecords", getPatientMedicalRecords);

export default router;