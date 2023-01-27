import express from "express";
import * as controller from "../controllers/Category";

const router = express.Router();

router.get("/:id", controller.getById);

router.get("/", controller.getAll);

router.post("/", controller.create);

router.delete("/:id", controller.destroy);

router.patch("/:id", controller.update);

export default router;
