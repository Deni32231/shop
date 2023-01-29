import categoryRouter from "./Category";
import subcategoryRouter from "./Subcategory";
import productRouter from "./Product";
import express from "express";

const router = express.Router();

router.use("/category", categoryRouter);
router.use("/subcategory", subcategoryRouter);
router.use("/product", productRouter);

export default router;
