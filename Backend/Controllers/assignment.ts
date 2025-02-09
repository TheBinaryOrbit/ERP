import { Request , Response } from "express";
import { assignment } from "../Models/assignment";

export const handleAddAssignment = async (req : Request , res : Response) : Promise<any> => {
    try {
        if( !req.body.title || !req.body.description || !req.body.className || !req.body.createdBy ) return res.status(400).json({"error" :  "All Fields Are Required"});

        const result = await assignment.create({
            title : req.body.title,
            description : req.body.description,
            className : req.body.className,
            createdBy : req.body.createdBy
        });

        if(!result) return res.status(500).json({ "error": "Internal Server Error: Unable to add Assignment" });
        
        return res.status(201).json({"message" : "Assignment Added To Student Successfully"});
    } catch (error) {
        return res.status(500).json({ "error": "Internal Server Error: Unable to add Assignment" });
    }
}