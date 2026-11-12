import express from "express";
import {
  addMembershipController,
  updateMembershipController,
} from "../controllers/membershipcontroller.js";

const router = express.Router();

// Nayi membership banane ki POST route.
router.post("/", addMembershipController);
// Member ID ke zariye membership update karne ki PUT route.
router.put("/:memberId", updateMembershipController);

export default router;
