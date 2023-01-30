import categoryRouter from "./Category";
import subcategoryRouter from "./Subcategory";
import productRouter from "./Product";
import productBrandRouter from "./ProductBrand";
import userRouter from "./User";
import express from "express";

const router = express.Router();

router.use("/category", categoryRouter);
router.use("/subcategory", subcategoryRouter);
router.use("/product", productRouter);
router.use("/productBrand", productBrandRouter);
router.use("/user", userRouter);

export default router;
