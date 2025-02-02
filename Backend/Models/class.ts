import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    class : {
        type : Number,
        required: true
    },
    section : {
        type : String,
        require : true,
    }
},{timestamps : true})


export const className = mongoose.model('class' ,classSchema);