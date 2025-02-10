import express, { Router } from "express";
import { handleAddAchivements, handleDeleteAchivement, handleUpdateAchivements } from "../Controllers/achievement";


export const AchievementRouter : Router = express.Router();

AchievementRouter.post('/addachievement' , handleAddAchivements);
AchievementRouter.patch('/updateachievement/:id' , handleUpdateAchivements);
AchievementRouter.delete('/deleteachievement/:id' , handleDeleteAchivement);