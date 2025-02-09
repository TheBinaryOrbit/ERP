import express, { Router } from "express";
import { handleAddStudent } from "../Controllers/student.js";

export const StudentRouter : Router =  express.Router();

StudentRouter.post('/addstudent', handleAddStudent);