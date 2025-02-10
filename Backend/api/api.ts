import { app } from "../src/app";
import 'dotenv/config';


import { StudentRouter } from '../Router/student';
import { TeacherRouter } from '../Router/teacher';
import { ComplaintRouter } from '../Router/complaint';
import { AchievementRouter } from '../Router/achievement';
import { AssignmentRouter } from '../Router/assignment';
import { LeaveApplicationRouter } from '../Router/leaveapplication';
import { LessonPlanRouter } from '../Router/lessonplan';
import { NoticeRouter } from '../Router/notice';
import { FeedbackRouter } from '../Router/feedback';
import { MarksRouter } from '../Router/marks';
import { FeeRouter } from '../Router/fee';
import { ClassRouter } from '../Router/class';

const SchoolName =  process.env.SchoolName

app.use(`/api/${SchoolName}/v1/student`, StudentRouter);
app.use(`/api/${SchoolName}/v1/teacher`, TeacherRouter);
app.use(`/api/${SchoolName}/v1/achievement`, AchievementRouter );
app.use(`/api/${SchoolName}/v1/complaint`, ComplaintRouter);
app.use(`/api/${SchoolName}/v1/assignment`, AssignmentRouter);
app.use(`/api/${SchoolName}/v1/leave`, LeaveApplicationRouter);
app.use(`/api/${SchoolName}/v1/lessonplan`, LessonPlanRouter);
app.use(`/api/${SchoolName}/v1/notice`, NoticeRouter);
app.use(`/api/${SchoolName}/v1/feedback`, FeedbackRouter);
app.use(`/api/${SchoolName}/v1/marks`, MarksRouter);
app.use(`/api/${SchoolName}/v1/fee`, FeeRouter);
app.use(`/api/${SchoolName}/v1/calss`, ClassRouter);
