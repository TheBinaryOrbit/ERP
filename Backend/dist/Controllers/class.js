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
exports.updateClass = exports.addclass = void 0;
const class_1 = require("../Models/class");
const addclass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.className || !req.body.fee || !req.body.section || !req.body.subjects)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield class_1.className.create({
            className: req.body.className,
            section: req.body.section,
            subjects: req.body.subjects,
            fee: req.body.fee
        });
        if (!result)
            return res.status(500).json({ "error": "Unable To Add Class" });
        return res.status(201).json({ "message": "Class Added Sucessfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server Error : Unable To Add Class" });
    }
});
exports.addclass = addclass;
const updateClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Class Id" });
        const result = (yield class_1.className.findByIdAndUpdate(id, req.body, { new: true }));
        if (!result)
            return res.status(500).json({ "error": "Unable To Update  Class" });
        return res.status(201).json({ "message": "Class Update Sucessfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server Error : Unable To Update  Class" });
    }
});
exports.updateClass = updateClass;
//# sourceMappingURL=class.js.map