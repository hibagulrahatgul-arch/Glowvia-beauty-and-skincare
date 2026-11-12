import express from "express";
import {
  getProductsController,
  addProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/productcontroller.js";

const router = express.Router();

router.get("/", getProductsController);
// Naya product add karne ki POST route.
router.post("/", addProductController);
// Product ke naam ke zariye update karne ki PUT route.
router.put("/:name", updateProductController);
// Product ke naam ke zariye delete karne ki DELETE route.
router.delete("/:name", deleteProductController);

export default router;
