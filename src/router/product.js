import express from "express";
import {
  getAll,
  getDetail,
  create,
  update,
  remove,
  PATCH,
} from "../controllers/product.js";

const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", getDetail);
router.post("/products", create);
router.put("/products/:id", update);
router.patch("/products/:id", PATCH);
router.delete("/products/:id", remove);

export default router;