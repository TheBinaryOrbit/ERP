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
exports.updateMarks = exports.addMarks = void 0;
const marks_1 = require("../Models/marks");
const addMarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requiredFields = ["studentId", "classId", "updatedBy", "marks", "examName"];
        // checking each element is present in req.body or not
        const isValid = requiredFields.every(field => field.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], req.body));
        if (!isValid)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield marks_1.marks.create({
            studentId: req.body.studentId,
            classId: req.body.classId,
            updatedBy: req.body.updatedBy,
            marks: req.body.marks,
            examName: req.body.examName
        });
        if (!result)
            return res.status(500).json({ "error": "Unable To Upload Marks" });
        return res.status(200).json({ "message": "Marks Uploaded Sucessfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error  : Unable To Upload Marks" });
    }
});
exports.addMarks = addMarks;
const updateMarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Id" });
        if (!req.body.marks)
            return res.status(400).json({ "error": "Updated Marks Are Required" });
        const result = yield marks_1.marks.findByIdAndUpdate(id, req.body.marks);
        if (!result)
            return res.status(500).json({ "error": "Unable To Upload Marks" });
        return res.status(200).json({ "message": "Marks Uploaded Sucessfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error  : Unable To Upload Marks" });
    }
});
exports.updateMarks = updateMarks;
//# sourceMappingURL=marks.js.map