import express from "express";
import {
  addProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/productcontroller.js";

const router = express.Router();

router.post("/", addProductController);
router.put("/:name", updateProductController);
router.delete("/:name", deleteProductController);

export default router;
