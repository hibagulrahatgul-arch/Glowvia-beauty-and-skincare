import mongoose from "mongoose";

// Order record ke fields, validation aur default notes ka schema.
const orderSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
    unique: true,
  },
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    default: "",
  },
});

// Schema se Order model banaya jata hai.
const Order = mongoose.model("Order", orderSchema);

export default Order;
