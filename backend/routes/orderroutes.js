import express from "express";

import {
  placeOrderController,
  pickupOrderController,
  deliverOrderController,
  getAllOrdersController,
} from "../controllers/ordercontroller.js";

const router = express.Router();

// Get all orders
router.get("/", getAllOrdersController);

// Place an order
router.post("/", placeOrderController);

// Pickup an order
router.put("/:orderId/pickup", pickupOrderController);

// Deliver an order
router.put("/:orderId/deliver", deliverOrderController);

export default router;