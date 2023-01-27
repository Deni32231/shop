import categoryRouter from "./Category";
import express from "express";

const router = express.Router();

router.use("/category", categoryRouter);

export default router;
