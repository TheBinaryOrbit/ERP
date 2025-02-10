import { Request , Response } from "express";
import { lessonPlan } from "../Models/lessonplan";

export const addLessonPlan = async (req : Request , res : Response) : Promise<any> => {
    try {
        if(!req.body.teacherId || !req.body.classId || !req.body.day || !req.body.periodNumber || !req.body.subject ) return res.status(400).json({"error" :  "All Fields Are Required"});
        

        const result = await lessonPlan.create({
            teacherId : req.body.teacherId,
            classId : req.body.classId,
            day : req.body.day,
            periodNumber : req.body.periodNumber,
            subject : req.body.subject
        });

        if(!result) return res.status(500).json({ "error": "Unable to add Lesson Plan" });

        return res.status(201).json({"message" : "Lesson Plan Added Successfully" , result});
    } catch (error) {
        if(error._message ==  "lessonplan validation failed") return res.json({"error" : "Invalid Type od lesson Plan"})
        console.log(error._message);
        return res.status(500).json({ "error": "Internal Server Error: Unable to add Lesson Plan" });
    }
}