import { Request, Response } from "express"
import { feedback } from "../Models/feedback";



export const addFeedback = async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.body.teacherId || !req.body.studentId || !req.body.points) return res.status(400).json({ "error": "All Fields Are Required" });

        const result = await feedback.create({
            teacherId : req.body.teacherId,
            studentId : req.body.studentId,
            points : req.body.points,
            remark : (!req.body.points) ? "No Remark" : req.body.remark
        })

        if (!result) return res.status(500).json({ error: "Unable to add Feedback" });

        return res.status(201).json({ "message": "Feedback Added Successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to add Feedback" });
    }

}