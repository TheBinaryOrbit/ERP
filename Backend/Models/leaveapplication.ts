import mongoose, { Schema } from "mongoose";

const leaveApplicationSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  leaveType: {
    type: String,
    enum: ["Sick Leave", "Casual Leave", "Emergency Leave", "Academic Leave"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "class",
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
  },
  reasonForRejection: {
    type: String,
  },
  attachments: {
    type: String,
  },
  isDisable : {
    type : Boolean,
    default : false
  }
}, { timestamps: true });

export const leaveApplication = mongoose.model('leaveapplication', leaveApplicationSchema);
