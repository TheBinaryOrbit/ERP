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
exports.deleteLeaveApplication = exports.updateLeaveApplication = exports.addLeave = void 0;
const leaveapplication_1 = require("../Models/leaveapplication");
const addLeave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.title || !req.body.description || !req.body.description || !req.body.endDate || !req.body.leaveType || !req.body.studentId || !req.body.classId)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield leaveapplication_1.leaveApplication.create({
            title: req.body.title,
            description: req.body.description,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            leaveType: req.body.leaveType,
            studentId: req.body.studentId,
            classId: req.body.classId
        });
        if (!result)
            return res.status(500).json({ error: "Unable To Submit Application" });
        return res.status(201).json({ "message": "Application Submited Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Submit Application" });
    }
});
exports.addLeave = addLeave;
const updateLeaveApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Applicaton  ID" });
        const result = yield leaveapplication_1.leaveApplication.findByIdAndUpdate(id, req.body, { new: true });
        if (!result)
            return res.status(404).json({ "error": "Applicaton Not Found" });
        return res.status(200).json({ "message": "Applicaton Updated Successfully", result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Applicaton" });
    }
});
exports.updateLeaveApplication = updateLeaveApplication;
const deleteLeaveApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Applicaton ID" });
        const result = yield leaveapplication_1.leaveApplication.findByIdAndUpdate(id, { isDisable: true });
        if (!result)
            return res.status(404).json({ "error": "Applicaton Not Found" });
        return res.status(200).json({ "message": "Applicaton Deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Application" });
    }
});
exports.deleteLeaveApplication = deleteLeaveApplication;
//# sourceMappingURL=leaveapplication.js.map