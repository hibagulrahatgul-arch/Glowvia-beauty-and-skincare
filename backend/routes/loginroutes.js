import express from "express";
import { authLoginController } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/customerlogin", authLoginController);
router.post("/admin/admin-login", authLoginController);

export default router;
