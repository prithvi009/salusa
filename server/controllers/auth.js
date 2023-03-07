import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import  Doctor  from "../models/Doctor.js";
import Patient from "../models/Patient.js"

export const registerPatient = async(req, res)=>{

    try{

        const{
            patientId,
            firstName,
            lastName, 
            email,
            password,
            picturePath, 
            location,
            dateOfBirth,
            gender
        } = req.body;


        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newPatient = new Patient({
            patientId,
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            location,
            dateOfBirth,
            gender,
        });
        const savedPatient = await newPatient.save();

        res.status(201).json(savedPatient);

    }
    catch(error){
        res.status(500).json({ error: error.message });
    }

};

export const registerDoctor = async(req, res)=> {

    try{
        const{
            doctorId,
            firstName,
            lastName, 
            email,
            password,
            picturePath, 
            location,
            dateOfBirth,
            gender,
            medicalLicenseNumber,
            backgroundCheck
        } = req.body;


        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        const newDoctor = new Doctor({
            doctorId,
            firstName,
            lastName, 
            email,
            password: passwordHash,
            picturePath, 
            location,
            dateOfBirth,
            gender,
            medicalLicenseNumber,
            backgroundCheck,

        })

        const savedDoctor = await newDoctor.save();
        res.status(201).json(savedDoctor);



    }
    catch(error){
        res.status(500).json({ error: error.message });
    }

};


export async function loginPatient(req, res){
    try{

        const {email, password} = req.body;
        const user = await Patient.findOne({email: email});

        if(!user)  res.status(400).json({ msg: "User does not exist. " });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });


        const token = jwt.sign({ patientId: user.patientId }, 'adkfhdsio128983nfdsjkf');
        console.log(token);
        delete user.password;
        res.status(200).json({ token, user });

    }
    catch(error){

        res.status(500).json({ error: error.message });

    }
};

export const loginDoctor = async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await Doctor.findOne({email: email});
        if(!user) res.status(400).json("Doctor does not exist");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) res.status(400).json("invalid credentials");

        const token = jwt.sign({id: user.doctorId},  'adkfhdsio128983nfdsjkf');
        delete user.password;
        res.status(200).json({ token, user });
    }
    catch(error){

        res.status(500).json({ error: error.message });

    }
}
