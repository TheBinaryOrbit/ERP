"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRouter = void 0;
const express_1 = __importDefault(require("express"));
const class_1 = require("../Controllers/class");
exports.ClassRouter = express_1.default.Router();
exports.ClassRouter.post('/addcalss', class_1.addclass);
exports.ClassRouter.post('/updatecalss/:id', class_1.updateClass);
//# sourceMappingURL=class.js.map