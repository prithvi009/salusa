import Patient from "../models/Patient.js";
import Doctor from "../models/Doctor.js";


export const addPatientRecord = async(req, res)=>{
    try{

        

    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getPatient = async(req, res)=>{
    try{
        const {id} = req.param;
        const user = await Patient.findById(id);

        res.status(200).json(user);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};


// const updatePatientRecord = async(req, res)=>{
//     try{
//         const {id} = req.params;

//         const doctorId = req.user.id;

//         const user = await Patient.findById(id);
//         const isAuthorized = await Doctor.findOne({_id: doctorId, patients: {$in: [id]}});
//         if(!isAuthorized) res.status(401).json({msg: "unauthorised"});


//     }
//     catch(error){

//     }

// }

 

