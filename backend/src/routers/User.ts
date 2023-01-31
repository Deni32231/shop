import express from "express";
import * as controller from "../controllers/User";
import errorsHandler from "../utils/errorsHandler";
import * as validation from "../validations/User";

const router = express.Router();

router.get("/:id", controller.getById);

router.get("/", controller.getAll);

router.post("/", validation.create, errorsHandler, controller.create);

router.delete("/:id", controller.deleteById);

router.patch("/:id", validation.update, errorsHandler, controller.updateById);

router.post("/singUp", validation.singUp, errorsHandler, controller.singUp);

router.post("/singIn", validation.singIn, errorsHandler, controller.singIn);

export default router;
