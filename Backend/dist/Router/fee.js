"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeRouter = void 0;
const express_1 = __importDefault(require("express"));
const fee_1 = require("../Controllers/fee");
exports.FeeRouter = express_1.default.Router();
exports.FeeRouter.patch('/addfee/:id', fee_1.addfee);
//# sourceMappingURL=fee.js.map