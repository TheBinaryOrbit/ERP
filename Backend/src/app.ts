import express from 'express';
import { Request , Response } from 'express';
import 'dotenv/config';
import { StudentRouter } from '../Router/student';
import { ConnectDB } from '../Database/ConnectDb';
import { TeacherRouter } from '../Router/teacher';
import { ComplaintRouter } from '../Router/complaint';
import { AchievementRouter } from '../Router/achievement';
import { AssignmentRouter } from '../Router/assignment';
import { LeaveApplicationRouter } from '../Router/leaveapplication';
import { LessonPlanRouter } from '../Router/lessonplan';
import { NoticeRouter } from '../Router/notice';
import { FeedbackRouter } from '../Router/feedback';


ConnectDB(process.env.DBURL)
const app = express();
const port : String = process.env.PORT;
const SchoolName : String =  process.env.SchoolName

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get('/api' , (req :  Request, res :  Response)=>{
  res.send('Har Har Mahadev');
})


// diffrent Routes

app.use(`/api/${SchoolName}/v1/student`, StudentRouter);
app.use(`/api/${SchoolName}/v1/teacher`, TeacherRouter);
app.use(`/api/${SchoolName}/v1/achievement`, AchievementRouter );
app.use(`/api/${SchoolName}/v1/complaint`, ComplaintRouter);
app.use(`/api/${SchoolName}/v1/assignment`, AssignmentRouter);
app.use(`/api/${SchoolName}/v1/leave`, LeaveApplicationRouter);
app.use(`/api/${SchoolName}/v1/lessonplan`, LessonPlanRouter);
app.use(`/api/${SchoolName}/v1/notice`, NoticeRouter);
app.use(`/api/${SchoolName}/v1/feedback`, FeedbackRouter);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
