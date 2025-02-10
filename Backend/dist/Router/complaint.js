"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintRouter = void 0;
const express_1 = __importDefault(require("express"));
const complaint_1 = require("../Controllers/complaint");
exports.ComplaintRouter = express_1.default.Router();
exports.ComplaintRouter.post('/addcomplaint', complaint_1.handleAddComplaint);
exports.ComplaintRouter.patch('/updatecomplaint/:id', complaint_1.handleUpdateComplaint);
exports.ComplaintRouter.delete('/deletecomplaint/:id', complaint_1.handleDeleteComplaint);
//# sourceMappingURL=complaint.js.map