"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonPlan = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const lessonPlanSchema = new mongoose_1.default.Schema({
    teacherId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },
    classId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'class',
        required: true
    },
    day: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true,
    },
    periodNumber: {
        type: Number,
        required: true
    }
});
exports.lessonPlan = mongoose_1.default.model('lessonplan', lessonPlanSchema);
//# sourceMappingURL=lessonplan.js.map