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
exports.handleAddComplaint = void 0;
const complaint_1 = require("../Models/complaint");
const handleAddComplaint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.title || !req.body.description || !req.body.createdOn || !req.body.createdBy)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield complaint_1.complaint.create({
            title: req.body.title,
            description: req.body.description,
            createdOn: req.body.createdOn,
            createdBy: req.body.createdBy
        });
        if (!result)
            return res.status(500).json({ error: "Internal Server Error: Unable to add Complaint" });
        return res.status(201).json({ "message": "Complaint Added To Student Successfully" });
    }
    catch (error) {
        return res.status(500).json({ error: "Internal Server Error: Unable to add Complaint" });
    }
});
exports.handleAddComplaint = handleAddComplaint;
//# sourceMappingURL=complaint.js.map