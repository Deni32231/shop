import express from "express";
import * as controller from "../controllers/Category";
import errorsHandler from "../utils/errorsHandler";
import * as validation from "../validations/Category";
import checkAdmin from "../utils/checkAdmin";

const router = express.Router();

router.get("/:id", controller.getById);

router.get("/", controller.getAll);

router.post(
  "/",
  validation.create,
  errorsHandler,
  checkAdmin,
  controller.create
);

router.delete("/:id", checkAdmin, controller.deleteById);

router.patch(
  "/:id",
  validation.update,
  errorsHandler,
  checkAdmin,
  controller.updateById
);

export default router;
