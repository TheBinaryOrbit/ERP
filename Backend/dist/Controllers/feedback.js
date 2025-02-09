"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFeedback = void 0;
const feedback_1 = require("../Models/feedback");
const addFeedback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.teacherId || !req.body.studentId || !req.body.points)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield feedback_1.feedback.create({
            teacherId: req.body.teacherId,
            studentId: req.body.studentId,
            points: req.body.points,
            remark: (!req.body.points) ? "No Remark" : req.body.remark
        });
        if (!result)
            return res.status(500).json({ error: "Unable to add Feedback" });
        return res.status(201).json({ "message": "Feedback Added Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to add Feedback" });
    }
});
exports.addFeedback = addFeedback;
//# sourceMappingURL=feedback.js.map