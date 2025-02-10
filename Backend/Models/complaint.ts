import mongoose, { Schema } from "mongoose";

const complaintSchema : Schema= new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    fineAmount : {
        type : Number,
        default : 0
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'teacher',
        required: true
    },
    createdOn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'student',
        required: true
    }
},{timestamps : true})

export const complaint = mongoose.model('complaint' , complaintSchema);