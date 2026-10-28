import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authroutes.js";
import loginRoutes from "./routes/loginroutes.js";
import productRoutes from "./routes/productroutes.js";
import orderRoutes from "./routes/orderroutes.js";
import complaintRoutes from "./routes/complaintroutes.js";
import membershipRoutes from "./routes/membershiproutes.js";


const app = express();
app.use(cors());
app.use(express.json());

//app.post("/add_product", productController);

app.use("/customersignup", authRoutes);
app.use("/", loginRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/complaints", complaintRoutes);
app.use("/memberships", membershipRoutes);

app.get("/test", (req, res) => {
  res.json({
    message: "Backend is working correctly!"
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
mongoose.connect("mongodb+srv://hibagulrahatgul_db_user:OOOPHELIAAA@cluster0.nofclay.mongodb.net/my-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

export default app;