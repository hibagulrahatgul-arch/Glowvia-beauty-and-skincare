import express from "express";
import { Router } from "express";
import { authController } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/", authController);

export default router;