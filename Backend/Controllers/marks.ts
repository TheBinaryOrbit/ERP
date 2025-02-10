import { Request, Response } from "express";
import { marks } from "../Models/marks";

export const addMarks = async (req: Request, res: Response): Promise<any> => {
    try {
        const requiredFields = ["studentId", "classId", "updatedBy", "marks" , "examName"];

        // checking each element is present in req.body or not
        const isValid = requiredFields.every(field =>
            field.split('.').reduce((obj, key) => obj?.[key], req.body)
        );

        if(!isValid) return res.status(400).json({"error" : "All Fields Are Required"});

        const result = await marks.create({
            studentId : req.body.studentId,
            classId : req.body.classId,
            updatedBy : req.body.updatedBy,
            marks : req.body.marks,
            examName : req.body.examName
        })

        if(!result) return res.status(500).json({"error" : "Unable To Upload Marks"});
        return res.status(200).json({ "message" : "Marks Uploaded Sucessfully"});

    } catch (error) {

        console.log(error);
        return res.status(500).json({ "error": "Internal Server error  : Unable To Upload Marks" });
    }
}

export const updateMarks = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        if (id.length != 24) return res.status(400).json({ "error": "Invalid Id" });

        if(!req.body.marks)return res.status(400).json({"error" : "Updated Marks Are Required"});

        const result = await marks.findByIdAndUpdate(id , req.body.marks)

        if(!result) return res.status(500).json({"error" : "Unable To Upload Marks"});
        return res.status(200).json({ "message" : "Marks Uploaded Sucessfully"});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error  : Unable To Upload Marks" });
    }
}

