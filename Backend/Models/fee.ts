import mongoose from "mongoose";

const feeSchema = new mongoose.Schema({
    studentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'student',
        required :true
    },
    month :{
        type : String,
        enum: ["apr-may", "may-june", "june-july", "july-aug", "aug-sept", "sept-oct", "oct-nov", "nov-dec", "dec-jan", "jan-feb", "feb-mar", "mar-apr"],
        required: true
    },
    feeAmount : {
        type : Number,
        require : true
    },
    paymentStatus : {
        type : String,
        enum : ['paid' , 'unpaid'],
        default : 'unpaid'
    },
    paymentMode : {
        tyep : String,
        enum : ['cash' , 'upi' , 'card']
    },
    transactionId :{
        type  : String,
    }
},{timestamps : true})

export const fee = mongoose.model('fee' , feeSchema);