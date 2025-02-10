"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarksRouter = void 0;
const express_1 = __importDefault(require("express"));
const marks_1 = require("../Controllers/marks");
exports.MarksRouter = express_1.default.Router();
exports.MarksRouter.post('/addmarks', marks_1.addMarks);
exports.MarksRouter.patch('/updatemarks/:id', marks_1.updateMarks);
//# sourceMappingURL=marks.js.map