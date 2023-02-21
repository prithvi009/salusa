import Doctor from "../models/Doctor";

export const getDoctorById = async(req, res)=>{
    try{

        const doctorId = req.user.id;

        

    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}