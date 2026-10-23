import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { authController } from "./controllers/authcntroller.js";
import authRoutes from "./routes/authroutes.s";


const app = express();
app.use(cors());
app.use(express.json());

//app.post("/add_product", productController);
app.use("/customersignup", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
mongoose.connect
("mongodb+srv://hibagulrahatgul_db_user:OOOPHELIAAA@cluster0.nofclay.mongodb.net/my-app")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

export default app;