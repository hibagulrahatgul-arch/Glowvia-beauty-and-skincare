import mongoose from "mongoose";

// Membership record ke fields aur unki validation ka schema.
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

// Schema se Membership model banaya jata hai.
const Membership = mongoose.model("Membership", membershipSchema);

export default Membership;
