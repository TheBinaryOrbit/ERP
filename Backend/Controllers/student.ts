import { student } from "../Models/student";
import { Request, Response } from "express";
import { className } from "../Models/class";
import { fee } from "../Models/fee";


export const handleAddStudent = async (req: Request, res: Response): Promise<any> => {
    try {
        const requiredFields = ["name", "className", "rollNumber", "admissionNumber", "gender", "dateOfBirth", "aadharNumber", "parentInfo.fatherName", "parentInfo.motherName", "parentInfo.fatherOccupation", "parentInfo.motherOccupation", "parentInfo.annualIncome", "parentInfo.phoneNumber1", "parentInfo.phoneNumber2", "permanentAddressInfo.state", "permanentAddressInfo.city", "permanentAddressInfo.address", "permanentAddressInfo.pincode", "temporaryAddressInfo.state", "temporaryAddressInfo.city", "temporaryAddressInfo.address", "temporaryAddressInfo.pincode"];

        // checking each element is present in req.body or not
        const isValid = requiredFields.every(field =>
            field.split('.').reduce((obj, key) => obj?.[key], req.body)
        );

        console.log(isValid)
        if (!isValid) return res.status(400).json({ "error": "All Fields Are Required" });


        const result = await student.create(req.body);
        if (!result) return res.status(500).json({ "error": "Internal Server Error: Unable to add student" });

        // adding the document of fee
        try {
            const getClass = await className.findById(result.className);

            const months = ["apr-may", "may-june", "june-july", "july-aug", "aug-sept", "sept-oct", "oct-nov", "nov-dec", "dec-jan", "jan-feb", "feb-mar", "mar-apr"]

            const query = months.map((month) => ({
                studentId: result._id,
                month: month,
                feeamount: getClass.fee,
            }));

            const addFeeDocuments = await fee.insertMany(query);

            // if error in adding fee deleting the student and through the error
            if (!addFeeDocuments) {
                const deletStudent = await student.findByIdAndDelete(result._id);
                if (!deletStudent) return res.status(500).json({ "error": "Internal Server error : Student Added But fee Document not inserted" });
                return res.status(500).json({ "error": "Unable to add Student" });
            }

            // if student as well as the fee document added sucessfully
            return res.status(201).json({ "message": "Student Added Sucessfuly" });
        } catch (error) {
            // if error in adding fee deleting the student and through the error
            console.log(error);
            const deletStudent = await student.findByIdAndDelete(result._id);
            if (!deletStudent) return res.status(500).json({ "error": "Internal Server error : Student Added But fee Document not inserted" });
            return res.status(500).json({ "error": "Unable to add Student" });
        }

    } catch (error) {
        if (error.code == 11000) return res.status(400).json({ "error": "Student Alerady Exist With This Admission Number" });
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error" });
    }
}



export const handleUpdateStudent = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;

        if (id.length != 24) return res.status(400).json({ "error": "Invalid StudentId" });

        const requiredFields = ["name", "className", "rollNumber", "admissionNumber", "gender", "dateOfBirth", "aadharNumber", "parentInfo.fatherName", "parentInfo.motherName", "parentInfo.fatherOccupation", "parentInfo.motherOccupation", "parentInfo.annualIncome", "parentInfo.phoneNumber1", "parentInfo.phoneNumber2", "permanentAddressInfo.state", "permanentAddressInfo.city", "permanentAddressInfo.address", "permanentAddressInfo.pincode", "temporaryAddressInfo.state", "temporaryAddressInfo.city", "temporaryAddressInfo.address", "temporaryAddressInfo.pincode"];

        const isValid = requiredFields.every(field =>
            field.split('.').reduce((obj, key) => obj?.[key], req.body)
        );

        console.log(isValid)
        if (!isValid) return res.status(400).json({ "error": "All Fields Are Required" });

        const result = await student.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) return res.status(500).json({ "error": "Unable to Update student" });

        return res.status(200).json({ "message": "Student Update Sucessfuly" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error : Unable to Update Student" });
    }
}

export const deleteStudent = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        if (id.length != 24) return res.status(400).json({ "error": "Invalid Student ID" });

        const result = await student.findByIdAndUpdate(id, { isVisible: false });

        if (!result) return res.status(404).json({ "error": "Student Not Found" });
        return res.status(200).json({ "message": "Student Deleted Successfully" });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Student" });
    }
}