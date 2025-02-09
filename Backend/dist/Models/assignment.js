"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const assignmentSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    className: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'class',
        required: true
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },
}, { timestamps: true });
exports.assignment = mongoose_1.default.model('assignment', assignmentSchema);
//# sourceMappingURL=assignment.js.map