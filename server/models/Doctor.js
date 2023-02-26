import mongoose from 'mongoose';


const DoctorSchema = new mongoose.Schema({
    doctorId:{
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
    medicalLicenseNumber: {
        type: String,
        required: true
    },
    professionalReferences: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Doctor"
        }
    ],
    backgroundCheck: {
        type: Boolean,
        default: false
    },
    medicalRecords: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "MedicalRecord"
        }
    ]
})

const Doctor = mongoose.model("Doctor", DoctorSchema)
export default Doctor;