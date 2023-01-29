import express from "express";
import * as controller from "../controllers/Product";
import errorsHandler from "../utils/errorsHandler";
import * as validation from "../validations/Product";

const router = express.Router();

router.get("/:id", controller.getById);

router.get("/", controller.getAll);

router.post("/", validation.create, errorsHandler, controller.create);

router.delete("/:id", controller.deleteById);

router.patch("/:id", validation.update, errorsHandler, controller.updateById);

export default router;
