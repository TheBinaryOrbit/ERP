"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notice = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const noticeSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    targetAudience: {
        type: String,
        enum: ['Students', 'Teachers', 'All'],
        required: true
    },
    status: {
        type: String,
        enum: ['Active', 'Expired'],
        default: 'Active'
    },
    isDisable: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.notice = mongoose_1.default.model('Notice', noticeSchema);
//# sourceMappingURL=notice.js.map