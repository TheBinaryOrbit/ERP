import express, { Router } from "express";
import { deleteStudent, handleAddStudent, handleUpdateStudent } from "../Controllers/student.js";

export const StudentRouter : Router =  express.Router();

StudentRouter.post('/addstudent', handleAddStudent);
StudentRouter.patch('/updatestudent.:id' , handleUpdateStudent)
StudentRouter.delete('/deletestudent/:id',deleteStudent);