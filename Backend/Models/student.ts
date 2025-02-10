import mongoose, { Schema } from "mongoose";
import { addressSchema } from "./commonSchema/address";
import {randomBytes , createHmac } from 'crypto'

const parentSchema : Schema = new mongoose.Schema({
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
    }
})


const studentSchema : Schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    className : {
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
        required : true,
        unique : true,
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
        type : String,
        required: true
    },
    isVisible : {
        type : Boolean,
        default : true
    },
    salt : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    parentInfo : parentSchema,
    permanentAddressInfo : addressSchema,
    temporaryAddressInfo : addressSchema
}, {timestamps : true})

export const student = mongoose.model('student' , studentSchema)


studentSchema.pre('save' , function(next){
        const student = this as any;

        const salt : string = randomBytes(8).toString('hex');
        const generatedPassword :string = createHmac('sha256', salt)
                                    .update(student.password)
                                    .digest('hex');
        this.salt = salt;
        this.password =  generatedPassword;
        next();
});