import express, { Router } from "express";
import { handleAddAssignment } from "../Controllers/assignment";


export const AssignmentRouter : Router = express.Router()

AssignmentRouter.post('/addassignment' , handleAddAssignment)