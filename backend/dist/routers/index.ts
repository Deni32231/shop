import categoryRouter from "./Category";
import subcategoryRouter from "./Subcategory";
import express from "express";

const router = express.Router();

router.use("/category", categoryRouter);
router.use("/subcategory", subcategoryRouter);

export default router;
