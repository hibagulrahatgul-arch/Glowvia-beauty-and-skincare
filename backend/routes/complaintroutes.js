import express from "express";

import {
  submitComplaintController,
  updateComplaintController,
  deleteComplaintController,
  getAllComplaintsController,
} from "../controllers/complaintcontroller.js";

const router = express.Router();

// Tamam complaints hasil karne ki GET route.
router.get("/", getAllComplaintsController);

// Nayi complaint jama karne ki POST route.
router.post("/", submitComplaintController);

// Complaint ID ke mutabiq status update karne ki PUT route.
router.put("/:complaintId", updateComplaintController);

// Complaint ID ke mutabiq complaint delete karne ki DELETE route.
router.delete("/:complaintId", deleteComplaintController);

export default router;