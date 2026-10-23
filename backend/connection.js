import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/admin/admin-login", (req, res) => {
  console.log("POST request received at /admin/admin-login");
  res.send("Admin Login endpoint reached");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect(
    "mongodb+srv://hibagulrahatgul_db_user:OOOPHELIAAA@cluster0.nofclay.mongodb.net/test"
).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

export default app;
