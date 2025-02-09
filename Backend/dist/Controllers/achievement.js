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
exports.handleAddAchivements = void 0;
const achievement_1 = require("../Models/achievement");
const handleAddAchivements = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.title || !req.body.description || !req.body.createdOn || !req.body.createdBy)
            return res.status(400).json({ "error": "All Fields Are Required" });
        const result = yield achievement_1.achievement.create({
            title: req.body.title,
            description: req.body.description,
            createdOn: req.body.createdOn,
            createdBy: req.body.createdBy
        });
        if (!result)
            return res.status(500).json({ error: "Internal Server Error: Unable to add Achievement" });
        return res.status(201).json({ "message": "Achievement Added To Student Successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error: Unable to add Achievement" });
    }
});
exports.handleAddAchivements = handleAddAchivements;
//# sourceMappingURL=achievement.js.map