import express, { Router } from "express";
import { handleAddTeacher } from "../Controllers/teacher";

export const TeacherRouter  : Router=  express.Router();

TeacherRouter.post('/addteacher', handleAddTeacher);