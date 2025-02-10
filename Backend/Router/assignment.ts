import express, { Router } from "express";
import { handleAddAssignment, handleDeleteAssignment, handleUpdateAssignment } from "../Controllers/assignment";


export const AssignmentRouter : Router = express.Router()

AssignmentRouter.post('/addassignment' , handleAddAssignment);
AssignmentRouter.patch('/updateassignment/:id' , handleUpdateAssignment);
AssignmentRouter.delete('/deleteassignment/:id' , handleDeleteAssignment);