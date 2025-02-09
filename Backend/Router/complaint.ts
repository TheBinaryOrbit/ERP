import express, { Router } from "express";
import { handleAddComplaint } from "../Controllers/complaint";

export const ComplaintRouter  :  Router =  express.Router();

ComplaintRouter.post('/addcomplaint', handleAddComplaint);