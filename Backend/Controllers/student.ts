import { student } from "../Models/student";
import { Request , Response } from "express";

export const handleAddStudent = async (req : Request , res : Response) : Promise<any> => {
    try {
        
        const requiredFields = ["name" , "className" , "rollNumber" , "admissionNumber" , "gender" , "dateOfBirth" , "aadharNumber" , "parentInfo.fatherName" , "parentInfo.motherName" , "parentInfo.fatherOccupation" , "parentInfo.motherOccupation" , "parentInfo.annualIncome", "parentInfo.phoneNumber1", "parentInfo.phoneNumber2" ,  "permanentAddressInfo.state" , "permanentAddressInfo.city" , "permanentAddressInfo.address" , "permanentAddressInfo.pincode" , "temporaryAddressInfo.state" , "temporaryAddressInfo.city", "temporaryAddressInfo.address" , "temporaryAddressInfo.pincode"];

        // checking each element is present in req.body or not
        const isValid = requiredFields.every(field => 
            field.split('.').reduce((obj, key) => obj?.[key], req.body)
        );
        
        console.log(isValid)
        if(!isValid) return res.status(400).json({"error" : "All Fields Are Required"});

        const result = await student.create(req.body);

        if(!result) return res.status(500).json({ error: "Internal Server Error: Unable to add student" });

        return res.status(201).json({"message" : "Student Added Sucessfuly"});
    } catch (error) {
        if(error.code == 11000 ) return res.status(400).json({"error" : "Student Alerady Exist With This Admission Number"});
        console.log(error);
        return res.status(500).json({"error" :"Internal Server error"});
    }   
}