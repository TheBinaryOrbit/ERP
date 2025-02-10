import express, { Router } from "express";
import { handleAddComplaint, handleDeleteComplaint, handleUpdateComplaint } from "../Controllers/complaint";

export const ComplaintRouter  :  Router =  express.Router();

ComplaintRouter.post('/addcomplaint', handleAddComplaint);
ComplaintRouter.patch('/updatecomplaint/:id', handleUpdateComplaint);
ComplaintRouter.delete('/deletecomplaint/:id', handleDeleteComplaint);