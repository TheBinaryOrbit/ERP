import mongoose from "mongoose";
import { addressSchema } from "./commonSchema/address";

const parentSchema = new mongoose.Schema({
    fatherName : {
        type : String,
        required: true
    },
    fatherOccupation : {
        type : String,
        required: true
    },
    motherName : {
        type : String,
        required: true
    },
    motherOccupation : {
        type : String,
        required: true
    },
    annualIncome :{
        type : Number,
        required : true
    },
    phoneNumber1 : {
        type : String,
        required : true
    },
    phoneNumber2 : {
        type : String,
        required : true
    },
    guardianName : {
        type : String,
        required: true
    }
})


const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'class',
        required: true
    },
    rollNumber : {
        type : Number, 
        required : true
    },
    admissionNumber :{
        type : Number, 
        required : true
    },
    profilePhoto : {
        type : String,
        required :true
    },
    gender : {
        type : String,
        enum : ['male' , 'female' , 'other'],
        required : true
    },
    dateOfBirth : {
        type : Date,
        required: true
    },
    aadharNumber : {
        type : Date,
        required: true
    },
    parentInfo : parentSchema,
    permanentAddressInfo : addressSchema,
    temporaryAddressInfo : addressSchema
}, {timestamps : true})

export const student = mongoose.model('student' , studentSchema)