import Patient from "../models/Patient";

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




