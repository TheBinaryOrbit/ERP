"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.complaint = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const complaintSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },
    createdOn: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'student',
        required: true
    }
}, { timestamps: true });
exports.complaint = mongoose_1.default.model('complaint', complaintSchema);
//# sourceMappingURL=complaint.js.map