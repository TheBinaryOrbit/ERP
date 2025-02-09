"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRouter = void 0;
const express_1 = __importDefault(require("express"));
const feedback_1 = require("../Controllers/feedback");
exports.FeedbackRouter = express_1.default.Router();
exports.FeedbackRouter.post('/addfeedback', feedback_1.addFeedback);
//# sourceMappingURL=feedback.js.map