import express, { Router } from "express";
import { addLeave, deleteLeaveApplication, updateLeaveApplication } from "../Controllers/leaveapplication";

export const LeaveApplicationRouter : Router = express.Router();

LeaveApplicationRouter.post('/addleave' , addLeave);
LeaveApplicationRouter.patch('/updateleave/:id' ,  updateLeaveApplication);
LeaveApplicationRouter.delete('/deleteleaveapplication/:id' , deleteLeaveApplication);