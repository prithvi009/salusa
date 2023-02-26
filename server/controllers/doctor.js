import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";
import MedicalRecord from "../models/MedicalRecord";


// export const addPatientRecord = async(req, res)=>{
//     try{
//         const {
//             patientId,
//             diagnosis,
//             symptoms,
//             notes,
//             vitals,
//             labResults,
//             medications,
//             procedures
//         } = req.body;



//         const medicalRecord = new MedicalRecord({
//             patientId : patientId,
//             doctorId: req.user._id, // Assumes the currently authenticated user is a doctor
//             symptoms:symptoms,
//             diagnosis:diagnosis,
//             medications:medications,
//             notes:notes,
//             vitals:vitals,
//             labResults:labResults,
//             procedures:procedures
//         });

//         await medicalRecord.save();
//         res.send(medicalRecord);
        

//     }
//     catch(error){
//         res.status(404).json({message: error.message});
//     }
// }

export const getPatient = async(req, res)=>{
    try{
        const {id} = req.param;
        const user = await Patient.findById(id);
        const isAuthorized = await Doctor.findOne({_id: doctorId, patients: {$in: [id]}});
        if(!isAuthorized) res.status(401).json({msg: "unauthorised"});

        
        res.status(200).json(user);
        // const patientId = req.params.id;
        // const patient = await Patient.findById(patientId);
        // if (!patient) {
        // return res.status(404).json({ error: 'Patient not found' });
        // }
        // res.json(patient);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};


// const updatePatientRecord = async(req, res)=>{
//     try{
//         const {id,} = req.params.body;

//         const doctorId = req.user.id;

//         const user = await Patient.findById(id);
//         const isAuthorized = await Doctor.findOne({_id: doctorId, patients: {$in: [id]}});
//         if(!isAuthorized) res.status(401).json({msg: "unauthorised"});


//     }
//     catch(error){

//     }

// }

 

