import mongoose from "mongoose";

// User record ke fields aur unki validation ka schema.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Schema se User model banaya jata hai.
const User = mongoose.model("User", userSchema);

export default User;