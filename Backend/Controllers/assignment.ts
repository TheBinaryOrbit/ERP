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

export const handleUpdateAssignment = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        if (id.length != 24) return res.status(400).json({ "error": "Invalid Assignment  ID" });

        const result = await assignment.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) return res.status(404).json({ "error": "Assignment Not Found" });
        return res.status(200).json({ "message": "Assignment Updated Successfully" , result });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Assignment" });
    }
}


export const handleDeleteAssignment =async (req : Request , res : Response) : Promise<any> => {
    try {
        const id = req.params.id;
        if(id.length != 24) return res.status(400).json({"error" : "Invalid Assignment ID"});

        const result = await assignment.findByIdAndDelete(id);

        if(!result) return res.status(404).json({"error" : "Assignment Not Found"});
        return res.status(200).json({"message" :  "Assignment Deleted Successfully"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Assignment" });
    }
}