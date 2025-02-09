import express, { Router } from "express";
import { handleAddAchivements } from "../Controllers/achievement";


export const AchievementRouter : Router = express.Router();

AchievementRouter.post('/addachievement' , handleAddAchivements)