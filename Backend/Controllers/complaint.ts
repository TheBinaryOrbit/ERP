import { Request , Response } from "express";
import { complaint } from "../Models/complaint";

export const handleAddComplaint =  async (req :  Request , res : Response) : Promise<any> => {
    try {
        if( !req.body.title || !req.body.description || !req.body.createdOn || !req.body.createdBy ) return res.status(400).json({"error" :  "All Fields Are Required"});

        const result =await complaint.create({
            title : req.body.title,
            description : req.body.description,
            createdOn : req.body.createdOn,
            createdBy : req.body.createdBy,
            fine : req.body?.fine
        })

        if(!result) return res.status(500).json({ error: "Internal Server Error: Unable to add Complaint" });
        
        return res.status(201).json({"message" : "Complaint Added To Student Successfully"});
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error: Unable to add Complaint" });
    }
}


export const handleUpdateComplaint = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        if (id.length != 24) return res.status(400).json({ "error": "Invalid Complaint  ID" });

        const result = await complaint.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) return res.status(404).json({ "error": "Complaint Not Found" });
        return res.status(200).json({ "message": "Complaint Updated Successfully" , result });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Complaint" });
    }
}


export const handleDeleteComplaint =async (req : Request , res : Response) : Promise<any> => {
    try {
        const id = req.params.id;
        if(id.length != 24) return res.status(400).json({"error" : "Invalid Complaint ID"});

        const result = await complaint.findByIdAndDelete(id);

        if(!result) return res.status(404).json({"error" : "Complaint Not Found"});
        return res.status(200).json({"message" :  "Complaint Deleted Successfully"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error:"Internal Server Error: Unable to Delete Complaint"});
    }
}
