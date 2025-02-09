"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const student_1 = require("../Router/student");
const ConnectDb_1 = require("../Database/ConnectDb");
const teacher_1 = require("../Router/teacher");
const complaint_1 = require("../Router/complaint");
const achievement_1 = require("../Router/achievement");
const assignment_1 = require("../Router/assignment");
const leaveapplication_1 = require("../Router/leaveapplication");
const lessonplan_1 = require("../Router/lessonplan");
const notice_1 = require("../Router/notice");
const feedback_1 = require("../Router/feedback");
(0, ConnectDb_1.ConnectDB)(process.env.DBURL);
const app = (0, express_1.default)();
const port = process.env.PORT;
const SchoolName = process.env.SchoolName;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/api', (req, res) => {
    res.send('Har Har Mahadev');
});
// diffrent Routes
app.use(`/api/${SchoolName}/v1/student`, student_1.StudentRouter);
app.use(`/api/${SchoolName}/v1/teacher`, teacher_1.TeacherRouter);
app.use(`/api/${SchoolName}/v1/achievement`, achievement_1.AchievementRouter);
app.use(`/api/${SchoolName}/v1/complaint`, complaint_1.ComplaintRouter);
app.use(`/api/${SchoolName}/v1/assignment`, assignment_1.AssignmentRouter);
app.use(`/api/${SchoolName}/v1/leave`, leaveapplication_1.LeaveApplicationRouter);
app.use(`/api/${SchoolName}/v1/lessonplan`, lessonplan_1.LessonPlanRouter);
app.use(`/api/${SchoolName}/v1/notice`, notice_1.NoticeRouter);
app.use(`/api/${SchoolName}/v1/feedback`, feedback_1.FeedbackRouter);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map