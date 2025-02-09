"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaveApplication = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const leaveApplicationSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    leaveType: {
        type: String,
        enum: ["Sick Leave", "Casual Leave", "Emergency Leave", "Academic Leave"],
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending",
    },
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "student",
        required: true,
    },
    classId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "class",
    },
    approvedBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "teacher",
    },
    reasonForRejection: {
        type: String,
    },
    attachments: {
        type: String,
    },
}, { timestamps: true });
exports.leaveApplication = mongoose_1.default.model('leaveapplication', leaveApplicationSchema);
//# sourceMappingURL=leaveapplication.js.map