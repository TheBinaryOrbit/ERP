"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const address_1 = require("./commonSchema/address");
const teacherSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
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
    classTeacherOf: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'class',
    },
    phoneNumber1: {
        type: String,
        required: true
    },
    phoneNumber2: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    permanentAddressInfo: address_1.addressSchema,
    temporaryAddressInfo: address_1.addressSchema,
    academicQualifications: {
        degree: {
            type: String,
            required: true
        },
        institution: {
            type: String,
            required: true
        },
        yearOfPassing: {
            type: Number,
            required: true
        }
    },
    specialisedSubject: {
        type: String,
        required: true
    },
    subjectsTaught: [
        {
            type: String
        }
    ],
}, { timestamps: true });
exports.teacher = mongoose_1.default.model('teacher', teacherSchema);
//# sourceMappingURL=teacher.js.map