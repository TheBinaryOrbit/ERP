import mongoose, { Schema } from "mongoose";
import { teacher } from "./teacher";

const feedbackSchema : Schema = new mongoose.Schema({
    teacherId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'teacher',
        required : true
    },
    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'student',
        required : true
    },
    points : {
        type : Number,
        enum : [1,2,3,4,5,6,7,8,9,10],
        required: true
    },
    remark : {
        type : String,
    }
} , {timestamps : true})

export const feedback = mongoose.model('feedback' , feedbackSchema);