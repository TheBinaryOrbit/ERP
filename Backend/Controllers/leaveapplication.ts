import { Request, Response } from "express"
import { leaveApplication } from "../Models/leaveapplication"

export const addLeave = async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.body.title || !req.body.description || !req.body.description || !req.body.endDate || !req.body.leaveType || !req.body.studentId || !req.body.classId) return res.status(400).json({ "error": "All Fields Are Required" });

        const result = await leaveApplication.create({
            title: req.body.title,
            description: req.body.description,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            leaveType: req.body.leaveType,
            studentId: req.body.studentId,
            classId: req.body.classId
        });

        if (!result) return res.status(500).json({ error: "Unable To Submit Application" });

        return res.status(201).json({ "message": "Application Submited Successfully" });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Submit Application" });
    }
}

export const updateLeaveApplication = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        if (id.length != 24) return res.status(400).json({ "error": "Invalid Applicaton  ID" });

        const result = await leaveApplication.findByIdAndUpdate(id, req.body, { new: true });

        if (!result) return res.status(404).json({ "error": "Applicaton Not Found" });
        return res.status(200).json({ "message": "Applicaton Updated Successfully" , result});
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Applicaton" });
    }
}


export const deleteLeaveApplication = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        if (id.length != 24) return res.status(400).json({ "error": "Invalid Applicaton ID" });

        const result = await leaveApplication.findByIdAndUpdate(id , {isDisable : true});

        if (!result) return res.status(404).json({ "error": "Applicaton Not Found" });
        return res.status(200).json({ "message": "Applicaton Deleted Successfully" });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Application" });
    }
}