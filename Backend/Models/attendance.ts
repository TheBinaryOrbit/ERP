import mongoose, { Schema } from "mongoose";
import { student } from "./student";

const attendanceSchema : Schema = new mongoose.Schema({
    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "student",
        reduired : true
    },
    date : {
        type : Date,
        required : true
    },
    status : {
        type : String,
        enum : ['Present' , 'Absent'],
        required: true
    }
}, {timestamps : true})