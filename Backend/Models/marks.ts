import mongoose from "mongoose";
import { student } from "./student";

const subjectMarks = new mongoose.Schema({
    subjectName : {
        type: String,
        required :true
    },
    marksOfSubject : {
        type : Number,
        required : true
    },
    totalMarks : {   
        type : Number,
        required : true
    }
})

const marksSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    classId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class',
        required: true
    },
    updatedBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },
    examName : {
        type : String,
        enum: ['ut1', 'ut2', 'sa1', 'ut3', 'ut4', 'sa2', 'serie1', 'serie2', 'serie3', 'pre-board'],
        required :true
    },
    marks : [subjectMarks],
},{timestamps : true})


export const marks = mongoose.model('mark' , marksSchema);