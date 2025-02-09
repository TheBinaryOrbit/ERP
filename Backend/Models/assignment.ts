import mongoose, { Schema } from "mongoose";

const assignmentSchema : Schema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    className : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'class',
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher',
        required: true
    },
},{timestamps : true});


export const assignment =  mongoose.model('assignment' , assignmentSchema);