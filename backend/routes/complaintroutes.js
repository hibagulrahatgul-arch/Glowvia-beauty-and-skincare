import express from "express";

import {
  submitComplaintController,
  updateComplaintController,
  deleteComplaintController,
  getAllComplaintsController,
} from "../controllers/complaintcontroller.js";

const router = express.Router();

// Get all complaints
router.get("/", getAllComplaintsController);

// Submit complaint
router.post("/", submitComplaintController);

// Update complaint
router.put("/:complaintId", updateComplaintController);

// Delete complaint
router.delete("/:complaintId", deleteComplaintController);

export default router;