import express, { Router } from "express";
import { addLeave } from "../Controllers/leaveapplication";

export const LeaveApplicationRouter : Router = express.Router();

LeaveApplicationRouter.post('/addleave' , addLeave);