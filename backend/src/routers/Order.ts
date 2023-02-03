import express from "express";
import * as controller from "../controllers/Order";
import checkAdmin from "../utils/checkAdmin";
import errorsHandler from "../utils/errorsHandler";
import * as validation from "../validations/Order";

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

export default router;
