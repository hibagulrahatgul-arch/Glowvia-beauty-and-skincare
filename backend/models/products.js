import mongoose from "mongoose";

// Product record ke fields aur unki validation ka schema.
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Schema se Product model banaya jata hai.
const Product = mongoose.model("Product", productSchema);

export default Product;
