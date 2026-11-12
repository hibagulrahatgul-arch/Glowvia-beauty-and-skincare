import express from "express";
import { authLoginController } from "../controllers/authcontroller.js";

const router = express.Router();

// Customer login ki request auth login controller ko bhejta hai.
router.post("/customerlogin", authLoginController);
// Admin login ki request bhi auth login controller ko bhejta hai.
router.post("/admin/admin-login", authLoginController);

export default router;
