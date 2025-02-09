"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonPlanRouter = void 0;
const express_1 = __importDefault(require("express"));
const lessonplan_1 = require("../Controllers/lessonplan");
exports.LessonPlanRouter = express_1.default.Router();
exports.LessonPlanRouter.post('/addlessonplan', lessonplan_1.addLessonPlan);
//# sourceMappingURL=lessonplan.js.map