"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.className = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const classSchema = new mongoose_1.default.Schema({
    className: {
        type: Number,
        required: true
    },
    classTeacherId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'teacher',
    },
    fee: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        require: true,
    },
    subjects: [
        {
            type: String
        }
    ]
}, { timestamps: true });
exports.className = mongoose_1.default.model('class', classSchema);
//# sourceMappingURL=class.js.map