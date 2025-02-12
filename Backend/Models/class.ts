import mongoose, { Schema } from "mongoose";

const classSchema : Schema = new mongoose.Schema({
    className : {
        type : Number,
        required: true
    },
    classTeacherId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'teacher',
    },
    fee : {
        type : Number,
        required : true
    },
    section : {
        type : String,
        require : true,
    },
    subjects : [
        {
            type : String
        }
    ]
},{timestamps : true});


export const className = mongoose.model('class' ,classSchema);