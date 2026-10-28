import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
  memberId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Membership = mongoose.model("Membership", membershipSchema);

export default Membership;
