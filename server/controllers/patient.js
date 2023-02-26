import Doctor from "../models/Doctor.js";
import MedicalRecord from "../models/MedicalRecord.js";
import Patient from "../models/Patient.js";

export const getPatientMedicalRecords = async(req, res)=>{

    try{

        const patientId = req.params.patientId;
        const doctorId = req.user.id;

        const isAuthorized = await Doctor.findOne({_id: doctorId, patients: {$in: patientId}});

        if(!isAuthorized) res.status(401).json({msg: "unauthorised"});

        const medicalRecords = await MedicalRecord.find({patient : patientId}).populate("doctor", ["name", "email"]).sort({date: -1});

        res.json(medicalRecords);

    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");

    }

};

export const getMyRecords = async(req, res)=>{

    try{

        const patientId = req.user.patientId;
        const patient = await Patient.find({patientId});
        console.log(req);
        const medicalRecords = await MedicalRecord.find({patientId: patient}).sort({date: -1});
        
        res.status(200).json(medicalRecords);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");

    }

};

export const getMyRecordsByDate = async(req, res)=>{
    try{
        const patientId = req.user.id;
        const date = req.params.date;
        

        
        const medicalRecords = await MedicalRecord.find({
            patient: patientId,
            date: { $gte: new Date(date), $lt: new Date(date + "T23:59:59.999Z") }
          })
            .sort({ date: -1 });
      
          res.json(medicalRecords);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");

    }
}

export const getPatientMedicalRecordsByDate = async(req, res)=>{
    try{
        const patientId = req.params.patientId;
        const doctorId = req.user.id;
        const date = req.params.date;
        

        const isAuthorized = await Doctor.findOne({
            _id: doctorId,
            patients: {$in: [patientId]}
        });

        if(!isAuthorized) res.status(401).json({msg: "unauthorised"});
        const medicalRecords = await MedicalRecord.find({
            patient: patientId,
            date: { $gte: new Date(date), $lt: new Date(date + "T23:59:59.999Z") }
          })
            .populate("doctor", ["name", "email"])
            .sort({ date: -1 });
      
          res.json(medicalRecords);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");

    }
}


