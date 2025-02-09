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
exports.addLessonPlan = void 0;
const lessonplan_1 = require("../Models/lessonplan");
const addLessonPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.teacherId || !req.body.classId || !req.body.day || !req.body.periodNumber)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield lessonplan_1.lessonPlan.create({
            teacherId: req.body.teacherId,
            classId: req.body.classId,
            day: req.body.day,
            periodNumber: req.body.periodNumber,
        });
        if (!result)
            return res.status(500).json({ "error": "Unable to add Lesson Plan" });
        return res.status(201).json({ "message": "Lesson Plan Added Successfully", result });
    }
    catch (error) {
        if (error._message == "lessonplan validation failed")
            return res.json({ "error": "Invalid Type od lesson Plan" });
        console.log(error._message);
        return res.status(500).json({ "error": "Internal Server Error: Unable to add Lesson Plan" });
    }
});
exports.addLessonPlan = addLessonPlan;
//# sourceMappingURL=lessonplan.js.map