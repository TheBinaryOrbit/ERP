import mongoose, { Schema } from "mongoose";
import { addressSchema } from "./commonSchema/address";



const teacherSchema : Schema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class',
    },
    phoneNumber1 : {
        type : String,
        required: true
    },
    phoneNumber2 : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    permanentAddressInfo : addressSchema,
    temporaryAddressInfo : addressSchema,
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