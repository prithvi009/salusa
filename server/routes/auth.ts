import express from "express"
import { loginDoctor, loginPatient } from "../controllers/auth"


const router = express.Router();

router.post("/doctor-login", loginDoctor);
router.post("/patient-login", loginPatient);

export default router;