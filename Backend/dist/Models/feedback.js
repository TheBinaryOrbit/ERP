"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedback = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const feedbackSchema = new mongoose_1.default.Schema({
    teacherId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    points: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        required: true
    },
    remark: {
        type: String,
    }
});
exports.feedback = mongoose_1.default.model('feedback', feedbackSchema);
//# sourceMappingURL=feedback.js.map