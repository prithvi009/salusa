import mongoose from "mongoose";

const MedicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctorId: {
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
    },
    vitals: {
      height: Number,
      weight: Number,
      temperature: Number,
      bloodPressure: {
        systolic: Number,
        diastolic: Number
      },
      pulse: Number,
      respiratoryRate: Number
    },
    labResults: [{
      test: String,
      result: String,
      date: Date
    }],
    procedures: [{
      name: String,
      date: Date,
      notes: String
    }]
});

const MedicalRecord = mongoose.model("MedicalRecord", MedicalRecordSchema);
export default MedicalRecord;
