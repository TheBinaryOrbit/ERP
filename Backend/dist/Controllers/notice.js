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
exports.deleteNotice = exports.updateNotice = exports.addNotice = void 0;
const notice_1 = require("../Models/notice");
const addNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.title || !req.body.description || !req.body.targetAudience)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield notice_1.notice.create({
            title: req.body.title,
            description: req.body.description,
            targetAudience: req.body.targetAudience,
        });
        if (!result)
            return res.status(500).json({ "error": "Unable to Create Notice" });
        return res.status(201).json({ "message": "Notice Created Successfully", result });
    }
    catch (error) {
        console.log(error._message);
        return res.status(500).json({ "error": "Internal Server Error: Unable to Create Notice" });
    }
});
exports.addNotice = addNotice;
const updateNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Notice  ID" });
        const result = yield notice_1.notice.findByIdAndUpdate(id, req.body, { new: true });
        if (!result)
            return res.status(404).json({ "error": "Notice Not Found" });
        return res.status(200).json({ "message": "Notice Updated Successfully", result });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Notice" });
    }
});
exports.updateNotice = updateNotice;
const deleteNotice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Notice ID" });
        const result = yield notice_1.notice.findByIdAndUpdate(id, { isDisable: true });
        if (!result)
            return res.status(404).json({ "error": "Notice Not Found" });
        return res.status(200).json({ "message": "Notice Deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to Delete Notice" });
    }
});
exports.deleteNotice = deleteNotice;
//# sourceMappingURL=notice.js.map