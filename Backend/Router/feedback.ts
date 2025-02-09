import express, { Router } from 'express';
import { addFeedback } from '../Controllers/feedback';


export const FeedbackRouter : Router = express.Router();

FeedbackRouter.post('/addfeedback', addFeedback);