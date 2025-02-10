import express, { Router } from 'express'
import { addMarks, updateMarks } from '../Controllers/marks';

export const MarksRouter : Router =  express.Router();

MarksRouter.post('/addmarks' , addMarks);
MarksRouter.patch('/updatemarks/:id' , updateMarks);