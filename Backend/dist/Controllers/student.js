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
exports.handleAddStudent = void 0;
const student_1 = require("../Models/student");
const handleAddStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requiredFields = ["name", "className", "rollNumber", "admissionNumber", "gender", "dateOfBirth", "aadharNumber", "parentInfo.fatherName", "parentInfo.motherName", "parentInfo.fatherOccupation", "parentInfo.motherOccupation", "parentInfo.annualIncome", "parentInfo.phoneNumber1", "parentInfo.phoneNumber2", "permanentAddressInfo.state", "permanentAddressInfo.city", "permanentAddressInfo.address", "permanentAddressInfo.pincode", "temporaryAddressInfo.state", "temporaryAddressInfo.city", "temporaryAddressInfo.address", "temporaryAddressInfo.pincode"];
        // checking each element is present in req.body or not
        const isValid = requiredFields.every(field => field.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], req.body));
        console.log(isValid);
        if (!isValid)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield student_1.student.create(req.body);
        if (!result)
            return res.status(500).json({ error: "Internal Server Error: Unable to add student" });
        return res.status(201).json({ "message": "Student Added Sucessfuly" });
    }
    catch (error) {
        if (error.code == 11000)
            return res.status(400).json({ "error": "Student Alerady Exist With This Admission Number" });
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error" });
    }
});
exports.handleAddStudent = handleAddStudent;
//# sourceMappingURL=student.js.map