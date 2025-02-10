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
exports.addfee = void 0;
const fee_1 = require("../Models/fee");
const addfee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = req.params.id;
        if (id.length != 24)
            return res.status(400).json({ "error": "Invalid Fee Id" });
        if (!req.body.paymentMode)
            return res.status(400).json({ "error": "Payment Mode is required" });
        const result = yield fee_1.fee.findByIdAndUpdate(id, {
            $set: {
                paymentStatus: true,
                paymentMode: req.body.paymentMode,
                transactionId: (_a = req.body) === null || _a === void 0 ? void 0 : _a.transactionId
            }
        });
        if (!result)
            return res.status(500).json({ "error": "Unable to add fee" });
        return res.status(200).json({ "message": "Fee Added Sucessfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server Error : Unable to add fee" });
    }
});
exports.addfee = addfee;
//# sourceMappingURL=fee.js.map