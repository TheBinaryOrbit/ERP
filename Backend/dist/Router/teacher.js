"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRouter = void 0;
const express_1 = __importDefault(require("express"));
const teacher_1 = require("../Controllers/teacher");
exports.TeacherRouter = express_1.default.Router();
exports.TeacherRouter.post('/addteacher', teacher_1.handleAddTeacher);
//# sourceMappingURL=teacher.js.map