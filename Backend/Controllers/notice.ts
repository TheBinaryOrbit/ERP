import { Request , Response } from "express";
import { notice } from "../Models/notice";

export const addNotice = async (req : Request , res : Response) : Promise<any> => {
    try {
        if(!req.body.title || !req.body.description || !req.body.targetAudience ) return res.status(400).json({"error" :  "All Fields Are Required"});

        const result = await notice.create({
            title : req.body.title,
            description : req.body.description,
            targetAudience : req.body.targetAudience,
        });

        if(!result) return res.status(500).json({ "error": "Unable to Create Notice" });

        return res.status(201).json({"message" : "Notice Created Successfully" , result});
    } catch (error) {
        console.log(error._message);
        return res.status(500).json({ "error": "Internal Server Error: Unable to Create Notice" });
    }
}