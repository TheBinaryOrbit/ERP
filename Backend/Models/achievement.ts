import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    createdOn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'student',
        required: true
    },

    // temporary hai may be photo ka option na de
    certificate : {
        type : String,
        required: true
    }
},{timestamps : true})

export const achievement = mongoose.model('achievement' , achievementSchema);