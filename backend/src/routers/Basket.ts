import express from "express";
import * as controller from "../controllers/Basket";
import errorsHandler from "../utils/errorsHandler";
import * as validation from "../validations/Basket";
import checkAdmin from "../utils/checkAdmin";

const router = express.Router();

router.get("/:id", checkAdmin, controller.getById);

router.get("/", checkAdmin, controller.getAll);

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
