import mongoose from "mongoose";

const MedicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    symptoms: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    medications: [
        {
          name: {
            type: String,
            required: true
          },
          dosage: {
            type: String,
            required: true
          },
          instructions: {
            type: String,
            required: true
          }
        }
    ],
    notes: {
        type: String,
        default: ""
    }
});

const MedicalRecord = mongoose.model("MedicalRecord", MedicalRecordSchema);
export default MedicalRecord;
