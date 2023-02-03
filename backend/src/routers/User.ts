import express from "express";
import * as controller from "../controllers/User";
import checkAdmin from "../utils/checkAdmin";
import checkAuth from "../utils/checkAuth";
import errorsHandler from "../utils/errorsHandler";
import * as validation from "../validations/User";

const router = express.Router();

router.get("/:id", checkAdmin, controller.getById);

router.get("/", checkAdmin, controller.getAll);

router.post(
  "/",
  checkAdmin,
  validation.create,
  errorsHandler,
  controller.create
);

router.delete("/:id", checkAdmin, controller.deleteById);

router.patch(
  "/:id",
  checkAdmin,
  validation.update,
  errorsHandler,
  controller.updateById
);

router.post("/singUp", validation.singUp, errorsHandler, controller.singUp);

router.post("/singIn", validation.singIn, errorsHandler, controller.singIn);

export default router;
