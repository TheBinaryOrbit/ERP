import express, { Router } from 'express';
import { addLessonPlan } from '../Controllers/lessonplan';

export const LessonPlanRouter : Router = express.Router();

LessonPlanRouter.post('/addlessonplan', addLessonPlan);