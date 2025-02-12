import mongoose, { Schema } from "mongoose";

export const addressSchema : Schema = new mongoose.Schema({
    state : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    pincode : {
        type : Number,
        required: true
    }
})