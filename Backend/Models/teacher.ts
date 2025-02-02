import mongoose from "mongoose";
import { addressSchema } from "./commonSchema/address";

const teacherSchema = new mongoose.Schema({
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
        type: Date,
        required: true
    },
    classTeacherOf: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class',
    },
    phoneNUmber1 : {
        type : String,
        required: true
    },
    phoneNUmber2 : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    permanentAddressInfo : addressSchema,
    temporaryAddressInfo : addressSchema,
    profilePhoto: {
        type: String,
        required: true
    },
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
    specialisedSubject :{
        type: String,
        required: true
    },
    subjectsTaught: [
        {
            type: String
        }
    ],
}, { timestamps: true });


export const teacher = mongoose.model('teacher' , teacherSchema);