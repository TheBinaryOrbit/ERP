"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRouter = void 0;
const express_1 = __importDefault(require("express"));
const student_js_1 = require("../Controllers/student.js");
exports.StudentRouter = express_1.default.Router();
exports.StudentRouter.post('/addstudent', student_js_1.handleAddStudent);
//# sourceMappingURL=student.js.map