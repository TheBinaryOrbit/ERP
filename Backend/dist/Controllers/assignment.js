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
exports.handleDeleteAssignment = exports.handleUpdateAssignment = exports.handleAddAssignment = void 0;
const assignment_1 = require("../Models/assignment");
const handleAddAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.title || !req.body.description || !req.body.className || !req.body.createdBy)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield assignment_1.assignment.create({
            title: req.body.title,
            description: req.body.description,
            className: req.body.className,
            createdBy: req.body.createdBy
        });
        if (!result)
            return res.status(500).json({ "error": "Internal Server Error: Unable to add Assignment" });
        return res.status(201).json({ "message": "Assignment Added To Student Successfully" });
    }
    catch (error) {
        return res.status(500).json({ "error": "Internal Server Error: Unable to add Assignment" });
    }
});
exports.handleAddAssignment = handleAddAssignment;
const handleUpdateAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Assignment  ID" });
        const result = yield assignment_1.assignment.findByIdAndUpdate(id, req.body, { new: true });
        if (!result)
            return res.status(404).json({ "error": "Assignment Not Found" });
        return res.status(200).json({ "message": "Assignment Updated Successfully", result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Assignment" });
    }
});
exports.handleUpdateAssignment = handleUpdateAssignment;
const handleDeleteAssignment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Assignment ID" });
        const result = yield assignment_1.assignment.findByIdAndDelete(id);
        if (!result)
            return res.status(404).json({ "error": "Assignment Not Found" });
        return res.status(200).json({ "message": "Assignment Deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Assignment" });
    }
});
exports.handleDeleteAssignment = handleDeleteAssignment;
//# sourceMappingURL=assignment.js.map