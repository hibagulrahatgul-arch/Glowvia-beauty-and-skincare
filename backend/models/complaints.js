import mongoose from "mongoose";

// Complaint record ke fields aur unki validation ka schema.
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

// Schema se Complaint model banaya jata hai.
const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
