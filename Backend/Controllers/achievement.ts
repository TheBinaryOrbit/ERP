import { Request, Response } from "express";
import { achievement } from "../Models/achievement";

export const handleAddAchivements = async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.body.title || !req.body.description || !req.body.createdOn || !req.body.createdBy) return res.status(400).json({ "error": "All Fields Are Required" });

        const result = await achievement.create({
            title: req.body.title,
            description: req.body.description,
            createdOn: req.body.createdOn,
            createdBy: req.body.createdBy
        })

        if (!result) return res.status(500).json({ error: "Internal Server Error: Unable to add Achievement" });

        return res.status(201).json({ "message": "Achievement Added To Student Successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to add Achievement" });
    }
}

export const handleUpdateAchivements = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        if (id.length != 24) return res.status(400).json({ "error": "Invalid Achivement ID" });

        const result = await achievement.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) return res.status(404).json({ "error": "Achivement Not Found" });
        return res.status(200).json({ "message": "Achievement Updated Successfully" , result });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Achievement" });
    }
}

export const handleDeleteAchivement = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        if (id.length != 24) return res.status(400).json({ "error": "Invalid Achivement  ID" });

        const result = await achievement.findByIdAndDelete(id);

        if (!result) return res.status(404).json({ "error": "Achivement Not Found" });
        return res.status(200).json({ "message": "Achievement Deleted Successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Achievement" });
    }
}