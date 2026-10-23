import express from "express";
import { Router } from "express";
import { authController } from "../controllers/authcntroller.js";

const router = express.Router();

router.post("/", authController);

export default router;