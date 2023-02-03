import categoryRouter from "./Category";
import subcategoryRouter from "./Subcategory";
import productRouter from "./Product";
import productBrandRouter from "./ProductBrand";
import userRouter from "./User";
import orderRouter from "./Order";
import basketRouter from "./Basket";
import promotionRouter from "./Promotion";
import vacancyRouter from "./Vacancy";
import express from "express";

const router = express.Router();

router.use("/category", categoryRouter);
router.use("/subcategory", subcategoryRouter);
router.use("/product", productRouter);
router.use("/productBrand", productBrandRouter);
router.use("/user", userRouter);
router.use("/order", orderRouter);
router.use("/basket", basketRouter);
router.use("/promotion", promotionRouter);
router.use("/vacancy", vacancyRouter);

export default router;
