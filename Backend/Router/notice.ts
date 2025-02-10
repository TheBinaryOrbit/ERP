import express, { Router } from  'express'
import { addNotice, deleteNotice, updateNotice } from '../Controllers/notice';

export const NoticeRouter : Router = express.Router();

NoticeRouter.post('/addnotice' , addNotice);
NoticeRouter.patch('/updatenotice/:id' , updateNotice)
NoticeRouter.delete('/deletenotice/:id' , deleteNotice);