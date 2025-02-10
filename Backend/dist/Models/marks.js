"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marks = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const subjectMarks = new mongoose_1.default.Schema({
    subjectName: {
        type: String,
        required: true
    },
    marksOfSubject: {
        type: Number,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    }
});
const marksSchema = new mongoose_1.default.Schema({
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    classId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'class',
        required: true
    },
    updatedBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },
    examName: {
        type: String,
        enum: ['ut1', 'ut2', 'sa1', 'ut3', 'ut4', 'sa2', 'serie1', 'serie2', 'serie3', 'pre-board'],
        required: true
    },
    marks: [subjectMarks],
}, { timestamps: true });
exports.marks = mongoose_1.default.model('mark', marksSchema);
//# sourceMappingURL=marks.js.map