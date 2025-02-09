import { teacher } from "../Models/teacher";
import { Request , Response } from "express";

export const handleAddTeacher = async (req : Request , res : Response) : Promise<any> => {
    try {
        const requiredFields = ["name" , "gender", "dateOfBirth" , "aadharNumber", "classTeacherOf", "phoneNumber1", "phoneNumber2" , "email" , "permanentAddressInfo.state" , "permanentAddressInfo.city" , "permanentAddressInfo.address" , "permanentAddressInfo.pincode" , "temporaryAddressInfo.state" , "temporaryAddressInfo.city", "temporaryAddressInfo.address" , "temporaryAddressInfo.pincode" , "academicQualifications.degree" , "academicQualifications.institution" , "academicQualifications.yearOfPassing" , "specialisedSubject" ,"subjectsTaught"];

        // checking each element is present in req.body or not
        const isValid = requiredFields.every(field => 
            field.split('.').reduce((obj, key) => obj?.[key], req.body)
        );
        
        console.log(isValid)
        if(!isValid) return res.status(400).json({"error" : "All Fields Are Required"});

        const result = await teacher.create(req.body);

        if(!result) return res.status(500).json({ error: "Internal Server Error: Unable to add teacher" });

        return res.status(201).json({"message" : "Teacher Added Sucessfuly"});
    } catch (error) {
        if(error.code == 11000 ) return res.status(400).json({"error" : "Teacher Alerady Exist With This Admission Number"});
        console.log(error);
        return res.status(500).json({"error" :"Internal Server error"});
    }   
}