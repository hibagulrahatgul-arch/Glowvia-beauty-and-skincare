import express from "express";
import { authController } from "../controllers/authcontroller.js";

const router = express.Router();

// Signup ke liye POST request auth controller ko bhejta hai.
router.post("/", authController);

export default router;