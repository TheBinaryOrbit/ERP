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
exports.deleteTeacher = exports.handleUpdateTeacher = exports.handleAddTeacher = void 0;
const teacher_1 = require("../Models/teacher");
const handleAddTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requiredFields = ["name", "gender", "dateOfBirth", "aadharNumber", "classTeacherOf", "phoneNumber1", "phoneNumber2", "email", "permanentAddressInfo.state", "permanentAddressInfo.city", "permanentAddressInfo.address", "permanentAddressInfo.pincode", "temporaryAddressInfo.state", "temporaryAddressInfo.city", "temporaryAddressInfo.address", "temporaryAddressInfo.pincode", "academicQualifications.degree", "academicQualifications.institution", "academicQualifications.yearOfPassing", "specialisedSubject", "subjectsTaught"];
        // checking each element is present in req.body or not
        const isValid = requiredFields.every(field => field.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], req.body));
        console.log(isValid);
        if (!isValid)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield teacher_1.teacher.create(req.body);
        if (!result)
            return res.status(500).json({ error: "Internal Server Error: Unable to add teacher" });
        return res.status(201).json({ "message": "Teacher Added Sucessfuly" });
    }
    catch (error) {
        if (error.code == 11000)
            return res.status(400).json({ "error": "Teacher Alerady Exist With This Admission Number" });
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error" });
    }
});
exports.handleAddTeacher = handleAddTeacher;
const handleUpdateTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid StudentId" });
        const requiredFields = ["name", "gender", "dateOfBirth", "aadharNumber", "classTeacherOf", "phoneNumber1", "phoneNumber2", "email", "permanentAddressInfo.state", "permanentAddressInfo.city", "permanentAddressInfo.address", "permanentAddressInfo.pincode", "temporaryAddressInfo.state", "temporaryAddressInfo.city", "temporaryAddressInfo.address", "temporaryAddressInfo.pincode", "academicQualifications.degree", "academicQualifications.institution", "academicQualifications.yearOfPassing", "specialisedSubject", "subjectsTaught"];
        // checking each element is present in req.body or not
        const isValid = requiredFields.every(field => field.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], req.body));
        console.log(isValid);
        if (!isValid)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield teacher_1.teacher.findByIdAndUpdate(id, req.body, { new: true });
        if (!result)
            return res.status(500).json({ error: "Unable to Update teacher" });
        return res.status(200).json({ "message": "Teacher Updated Sucessfuly" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error : Unable to Update teacher" });
    }
});
exports.handleUpdateTeacher = handleUpdateTeacher;
const deleteTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Teacher ID" });
        const result = yield teacher_1.teacher.findByIdAndUpdate(id, { isVisible: false });
        if (!result)
            return res.status(404).json({ "error": "Teacher Not Found" });
        return res.status(200).json({ "message": "Teacher Deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Teacher" });
    }
});
exports.deleteTeacher = deleteTeacher;
//# sourceMappingURL=teacher.js.map