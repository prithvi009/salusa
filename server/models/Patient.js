import mongoose from "mongoose";


const PatientSchema = new mongoose.Schema(
    {
    
        patientId:{
            type: Number,
            require: true,
            unique: true,
        },
        firstName:{
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastName:{
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        email:{
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        picturePath: {
            type: String,
            default: "",
        },
        location:{
            type: String
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        medicalRecords: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "MedicalRecord"
            }
        ]

    }
);

const Patient = mongoose.model("Patient", PatientSchema);

export default Patient;