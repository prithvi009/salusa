import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";
import MedicalRecord from "../models/MedicalRecord.js";


export const addPatientRecord = async(req, res)=>{
    try{
        const {
            patientId,
            diagnosis,
            symptoms,
            notes,
            vitals,
            labResults,
            medications,
            procedures
        } = req.body;
        console.log(req);
        const patient = await Patient.findOne({patientId: patientId});
        const doctorId = req.user.id;
        const doctor = await Doctor.findOne({doctorId});
        const medicalRecord = new MedicalRecord({
            patientId : patient._id,
            doctorId: doctor._id, // Assumes the currently authenticated user is a doctor
            symptoms: symptoms,
            diagnosis: diagnosis,
            medications: medications,
            notes: notes,
            vitals: vitals,
            labResults: labResults,
            procedures: procedures
        });

        
        const medical = await medicalRecord.save();
        res.send(medical);
        

    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getPatient = async(req, res)=>{
    try{
        const {patientId} = req.param;
        const user = await Patient.findById(patientId);
        res.status(200).json(user);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};


// const updatePatientRecord = async(req, res)=>{
//     try{

//         const doctorId = req.user.id;

//         const user = await Patient.findById(id);
//         const isAuthorized = await Doctor.findOne({_id: doctorId, patients: {$in: [id]}});
//         if(!isAuthorized) res.status(401).json({msg: "unauthorised"});


//     }
//     catch(error){

//     }

// }

 

