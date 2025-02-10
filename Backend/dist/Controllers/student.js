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
exports.deleteStudent = exports.handleUpdateStudent = exports.handleAddStudent = void 0;
const student_1 = require("../Models/student");
const class_1 = require("../Models/class");
const fee_1 = require("../Models/fee");
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
            return res.status(500).json({ "error": "Internal Server Error: Unable to add student" });
        // adding the document of fee
        try {
            const getClass = yield class_1.className.findById(result.className);
            const months = ["apr-may", "may-june", "june-july", "july-aug", "aug-sept", "sept-oct", "oct-nov", "nov-dec", "dec-jan", "jan-feb", "feb-mar", "mar-apr"];
            const query = months.map((month) => ({
                studentId: result._id,
                month: month,
                feeamount: getClass.fee,
            }));
            const addFeeDocuments = yield fee_1.fee.insertMany(query);
            // if error in adding fee deleting the student and through the error
            if (!addFeeDocuments) {
                const deletStudent = yield student_1.student.findByIdAndDelete(result._id);
                if (!deletStudent)
                    return res.status(500).json({ "error": "Internal Server error : Student Added But fee Document not inserted" });
                return res.status(500).json({ "error": "Unable to add Student" });
            }
            // if student as well as the fee document added sucessfully
            return res.status(201).json({ "message": "Student Added Sucessfuly" });
        }
        catch (error) {
            // if error in adding fee deleting the student and through the error
            console.log(error);
            const deletStudent = yield student_1.student.findByIdAndDelete(result._id);
            if (!deletStudent)
                return res.status(500).json({ "error": "Internal Server error : Student Added But fee Document not inserted" });
            return res.status(500).json({ "error": "Unable to add Student" });
        }
    }
    catch (error) {
        if (error.code == 11000)
            return res.status(400).json({ "error": "Student Alerady Exist With This Admission Number" });
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error" });
    }
});
exports.handleAddStudent = handleAddStudent;
const handleUpdateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid StudentId" });
        const requiredFields = ["name", "className", "rollNumber", "admissionNumber", "gender", "dateOfBirth", "aadharNumber", "parentInfo.fatherName", "parentInfo.motherName", "parentInfo.fatherOccupation", "parentInfo.motherOccupation", "parentInfo.annualIncome", "parentInfo.phoneNumber1", "parentInfo.phoneNumber2", "permanentAddressInfo.state", "permanentAddressInfo.city", "permanentAddressInfo.address", "permanentAddressInfo.pincode", "temporaryAddressInfo.state", "temporaryAddressInfo.city", "temporaryAddressInfo.address", "temporaryAddressInfo.pincode"];
        const isValid = requiredFields.every(field => field.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], req.body));
        console.log(isValid);
        if (!isValid)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield student_1.student.findByIdAndUpdate(id, req.body, { new: true });
        if (!result)
            return res.status(500).json({ "error": "Unable to Update student" });
        return res.status(200).json({ "message": "Student Update Sucessfuly" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server error : Unable to Update Student" });
    }
});
exports.handleUpdateStudent = handleUpdateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Student ID" });
        const result = yield student_1.student.findByIdAndUpdate(id, { isVisible: false });
        if (!result)
            return res.status(404).json({ "error": "Student Not Found" });
        return res.status(200).json({ "message": "Student Deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Student" });
    }
});
exports.deleteStudent = deleteStudent;
//# sourceMappingURL=student.js.map