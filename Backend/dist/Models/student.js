"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const address_1 = require("./commonSchema/address");
const crypto_1 = require("crypto");
const parentSchema = new mongoose_1.default.Schema({
    fatherName: {
        type: String,
        required: true
    },
    fatherOccupation: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    motherOccupation: {
        type: String,
        required: true
    },
    annualIncome: {
        type: Number,
        required: true
    },
    phoneNumber1: {
        type: String,
        required: true
    },
    phoneNumber2: {
        type: String,
        required: true
    },
    guardianName: {
        type: String,
    }
});
const studentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    className: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'class',
        required: true
    },
    rollNumber: {
        type: Number,
        required: true
    },
    admissionNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true
    },
    isVisible: {
        type: Boolean,
        default: true
    },
    salt: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    parentInfo: parentSchema,
    permanentAddressInfo: address_1.addressSchema,
    temporaryAddressInfo: address_1.addressSchema
}, { timestamps: true });
exports.student = mongoose_1.default.model('student', studentSchema);
studentSchema.pre('save', function (next) {
    const student = this;
    const salt = (0, crypto_1.randomBytes)(8).toString('hex');
    const generatedPassword = (0, crypto_1.createHmac)('sha256', salt)
        .update(student.password)
        .digest('hex');
    this.salt = salt;
    this.password = generatedPassword;
    next();
});
//# sourceMappingURL=student.js.map