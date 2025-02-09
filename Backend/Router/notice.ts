import express, { Router } from  'express'
import { addNotice } from '../Controllers/notice';

export const NoticeRouter : Router = express.Router();

NoticeRouter.post('/addnotice' , addNotice);