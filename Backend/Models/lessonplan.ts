import mongoose , { Schema } from "mongoose";


const lessonPlanSchema : Schema = new mongoose.Schema({
    teacherId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'teacher',
        required : true
    },
    classId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'class',
        required : true
    },
    day : {
        type : String,
        enum : ['Monday','Tuesday' , 'Wednesday','Thursday' , 'Friday' , 'Saturday' , 'Sunday'],
        required : true,
    },
    periodNumber : {
        type : Number,
        required : true
    }
});

export const lessonPlan =  mongoose.model('lessonplan' , lessonPlanSchema)
