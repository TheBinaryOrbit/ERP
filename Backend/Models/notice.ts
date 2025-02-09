import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  targetAudience: {
    type: String,
    enum: ['Students', 'Teachers', 'All'],
    required :true
  },
  status: {
    type: String,
    enum: ['Active', 'Expired'],
    default: 'Active'
  },
},{timestamps : true});

export const notice= mongoose.model('Notice', noticeSchema);
