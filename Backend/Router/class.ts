import express from "express";
import { addclass, updateClass } from "../Controllers/class";

export const ClassRouter = express.Router();

ClassRouter.post('/addcalss' , addclass);
ClassRouter.post('/updatecalss/:id' , updateClass);
