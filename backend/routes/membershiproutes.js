import express from "express";
import {
  addMembershipController,
  updateMembershipController,
} from "../controllers/membershipcontroller.js";

const router = express.Router();

router.post("/", addMembershipController);
router.put("/:memberId", updateMembershipController);

export default router;
