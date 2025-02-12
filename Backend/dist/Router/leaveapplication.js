"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveApplicationRouter = void 0;
const express_1 = __importDefault(require("express"));
const leaveapplication_1 = require("../Controllers/leaveapplication");
exports.LeaveApplicationRouter = express_1.default.Router();
exports.LeaveApplicationRouter.post('/addleave', leaveapplication_1.addLeave);
exports.LeaveApplicationRouter.patch('/updateleave/:id', leaveapplication_1.updateLeaveApplication);
exports.LeaveApplicationRouter.delete('/deleteleaveapplication/:id', leaveapplication_1.deleteLeaveApplication);
//# sourceMappingURL=leaveapplication.js.map