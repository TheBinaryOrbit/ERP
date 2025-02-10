import express from 'express';
import { addfee } from '../Controllers/fee';

export const FeeRouter = express.Router();

FeeRouter.patch('/addfee/:id' , addfee);