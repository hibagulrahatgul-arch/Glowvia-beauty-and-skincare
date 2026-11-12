import express from "express";

import {
  placeOrderController,
  pickupOrderController,
  deliverOrderController,
  getAllOrdersController,
} from "../controllers/ordercontroller.js";

const router = express.Router();

// Tamam orders hasil karne ki GET route.
router.get("/", getAllOrdersController);

// Naya order place karne ki POST route.
router.post("/", placeOrderController);

// Order ID ke zariye pickup status update karne ki PUT route.
router.put("/:orderId/pickup", pickupOrderController);

// Order ID ke zariye delivery status update karne ki PUT route.
router.put("/:orderId/deliver", deliverOrderController);

export default router;