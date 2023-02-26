import express, { Router } from "express";
import cors from "cors";

import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import multer from "multer";
import morgan from "morgan";
import path  from "path";
import { fileURLToPath } from "url";

import { registerDoctor, registerPatient } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
// import { addPatientRecord } from "./controllers/doctor.js";
// import getPatient  from "./controllers/doctor.js";



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
});
const upload = multer({ storage });

//routes with file
app.post("/auth/register-patient", upload.single("picture"), registerPatient);
app.post("/auth/register-doctor", upload.single("picture"), registerDoctor);


// app.post("/auth/add-record", addPatientRecord);

// app.get('/prithvi', getPatient);
app.use("/auth", authRoutes); 

const MONGO_URL = 'mongodb+srv://prithvi:prithvi009@cluster0.ygcrjfj.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8080;
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            app.listen(PORT, ()=> console.log(`server started at : ${PORT}`));
            
            
        })
        .catch((error)=> console.log(`${error}`));


mongoose.set('strictQuery', false)

