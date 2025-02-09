"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRouter = void 0;
const express_1 = __importDefault(require("express"));
const notice_1 = require("../Controllers/notice");
exports.NoticeRouter = express_1.default.Router();
exports.NoticeRouter.post('/addnotice', notice_1.addNotice);
//# sourceMappingURL=notice.js.map