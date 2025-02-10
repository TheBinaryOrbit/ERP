"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const attendanceSchema = new mongoose_1.default.Schema({
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "student",
        reduired: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Present', 'Absent'],
        required: true
    }
}, { timestamps: true });
//# sourceMappingURL=attendance.js.map