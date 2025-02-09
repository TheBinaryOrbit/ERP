"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementRouter = void 0;
const express_1 = __importDefault(require("express"));
const achievement_1 = require("../Controllers/achievement");
exports.AchievementRouter = express_1.default.Router();
exports.AchievementRouter.post('/addachievement', achievement_1.handleAddAchivements);
//# sourceMappingURL=achievement.js.map