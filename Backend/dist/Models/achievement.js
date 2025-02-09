"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.achievement = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const achievementSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    createdOn: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    createdBy: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },
    // temporary hai may be photo ka option na de
    certificate: {
        type: String,
        // required: true
    }
}, { timestamps: true });
exports.achievement = mongoose_1.default.model('achievement', achievementSchema);
//# sourceMappingURL=achievement.js.map