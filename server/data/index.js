import mongoose from "mongoose";


const userIds = [
    new mongoose.Types.ObjectId(),
];

const patientIds=[

    new mongoose.Types.ObjectId(),
]

const medicalIds=[

    new mongoose.Types.ObjectId(),
]

export const doctor=[
    {
        _id: userIds[0],
        firstName: "praniti",
        lastName: "me",
        email: "aaaaaaa@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        picturePath: "p11.jpeg",
        location: "Delhi",
        dateOfBirth: 2003-9-15,
        gender: "female",
        medicalLicenseNumber: "sdljfasdfj8374",
        medicalRecords: medicalIds[0]

    }
]



export const patient=[
    {   patientId: 999,
        firstName: "pr",
        lastName: "awa",
        email: "awatadeprithviraj09@gmail.com",
        password: "$2b$10$gk6gEvsV9qgihuBEBC9XPevtvZcILl04d91MF9sxZ5V1ZgLq9vP8O",
        picturePath: "",
        location: "solapur",
        dateOfBirth: 2002-10-11,
        gender: "male",
        medicalRecords: medicalIds[0]
    }
]


export const medical =[
    {
        patientId: patientIds[0],
        doctorId: userIds[0],
        diagnosis: "Hypertension",
        symptoms: "Prescribed lisinopril",
        notes: "Patient reports occasional headaches",
        
        
        labResults: [
            {
            testName: "Complete Blood Count",
            result: "Normal"
            },
            {
            testName: "Lipid Panel",
            result: "Elevated LDL cholesterol"
            }
        ],
        procedures: [
            {
                name: "EKG",
                date: "2022-02-25T00:00:00.000Z",
                notes: "Normal sinus rhythm"
            },
        ]

    }

]