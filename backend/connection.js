import express from "express";
import mongoose from "mongoose";
import cors from "cors";
//routes ke files import karna
import authRoutes from "./routes/authroutes.js";
import loginRoutes from "./routes/loginroutes.js";
import productRoutes from "./routes/productroutes.js";
import orderRoutes from "./routes/orderroutes.js";
import complaintRoutes from "./routes/complaintroutes.js";
import membershipRoutes from "./routes/membershiproutes.js";

//express app create karna
const app = express();
//backend ke liye middleware setup karna function work between request and response
app.use(cors());
app.use(express.json());

//app.post("/add_product", productController);
//routes connect karna server ky sat
app.use("/customersignup", authRoutes);
app.use("/", loginRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/complaints", complaintRoutes);
app.use("/memberships", membershipRoutes);
//test api
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