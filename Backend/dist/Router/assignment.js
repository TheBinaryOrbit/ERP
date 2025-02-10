"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const assignment_1 = require("../Controllers/assignment");
exports.AssignmentRouter = express_1.default.Router();
exports.AssignmentRouter.post('/addassignment', assignment_1.handleAddAssignment);
exports.AssignmentRouter.patch('/updateassignment/:id', assignment_1.handleUpdateAssignment);
exports.AssignmentRouter.delete('/deleteassignment/:id', assignment_1.handleDeleteAssignment);
//# sourceMappingURL=assignment.js.map