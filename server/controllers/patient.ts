import Doctor from "../models/Doctor";
import MedicalRecord from "../models/MedicalRecord";

const getPatientMedicalRecords = async(req, res)=>{

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


const getPatientMedicalRecordsByDate = async(req, res)=>{
    try{
        const patientId = req.params.patientId;
        const doctorId = req.user.id;
        const date = req.params.date;
        

        const isAuthorized = await Doctor.findOne({
            _id: doctorId,
            patients: {$in: [patientId]}
        });
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