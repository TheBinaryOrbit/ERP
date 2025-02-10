"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fee = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const feeSchema = new mongoose_1.default.Schema({
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    month: {
        type: String,
        enum: ["apr-may", "may-june", "june-july", "july-aug", "aug-sept", "sept-oct", "oct-nov", "nov-dec", "dec-jan", "jan-feb", "feb-mar", "mar-apr"],
        required: true
    },
    feeAmount: {
        type: Number,
        require: true
    },
    paymentStatus: {
        type: String,
        enum: ['paid', 'unpaid'],
        default: 'unpaid'
    },
    paymentMode: {
        tyep: String,
        enum: ['cash', 'upi', 'card']
    },
    transactionId: {
        type: String,
    }
}, { timestamps: true });
exports.fee = mongoose_1.default.model('fee', feeSchema);
//# sourceMappingURL=fee.js.map