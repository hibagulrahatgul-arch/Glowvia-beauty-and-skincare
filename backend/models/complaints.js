import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  complaintId: {
    type: Number,
    required: true,
    unique: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
