import express from "express";
import * as controller from "../controllers/Subcategory";
import errorsHandler from "../utils/errorsHandler";
import * as validation from "../validations/Subcategory";

const router = express.Router();

router.get("/:id", controller.getById);

router.get("/", controller.getAll);

router.post("/", validation.create, errorsHandler, controller.create);

router.delete("/:id", controller.destroy);

router.patch("/:id", validation.update, errorsHandler, controller.update);

export default router;
