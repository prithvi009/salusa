import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import  Doctor  from "../models/Doctor";
import Patient from "../models/Patient";


export const registerPatient = async(req, res)=>{

    try{

        const{
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
            firstName,
            lastName, 
            email,
            password,
            picturePath, 
            location,
            dateOfBirth,
            gender,
            medicalLicenseNumber,
        } = req.body;


        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        const newDoctor = {
            firstName,
            lastName, 
            email,
            password: passwordHash,
            picturePath, 
            location,
            dateOfBirth,
            gender,
            medicalLicenseNumber,

        }

        const savedDoctor = await newDoctor.save();
        res.status(201).json(savedDoctor);



    }
    catch(error){
        res.status(500).json({ error: error.message });
    }

};

export const loginPatient = async(req, res)=>{
    try{

        const {email, password} = req.body;
        const user = await Patient.findOne({email: email});
        if(!user)  res.status(400).json({ msg: "User does not exist. " });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
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
        const user = await Doctor.findOne(email);
        if(!user) res.status(400).json("Doctor does not exist");

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) res.status(400).json("invalid credentials");

        const token = jwt.sign({id: user._id},  process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    }
    catch(error){

        res.status(500).json({ error: error.message });

    }
}