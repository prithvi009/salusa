import express from "express"
import { loginDoctor, loginPatient } from "../controllers/auth.js"


const authRoutes = express.Router();

authRoutes.post("/doctor-login", loginDoctor);
authRoutes.post("/patient-login", loginPatient);

export default authRoutes;