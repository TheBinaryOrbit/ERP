import express, { Router } from "express";
import { deleteTeacher, handleAddTeacher, handleUpdateTeacher } from "../Controllers/teacher";

export const TeacherRouter  : Router=  express.Router();

TeacherRouter.post('/addteacher', handleAddTeacher);
TeacherRouter.patch('/updateteacher/:id' , handleUpdateTeacher);
TeacherRouter.delete('/deleteteacher/:id', deleteTeacher);