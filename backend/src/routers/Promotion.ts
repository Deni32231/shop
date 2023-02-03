import express from "express";
import * as controller from "../controllers/Promotion";
import checkAdmin from "../utils/checkAdmin";
import errorsHandler from "../utils/errorsHandler";
import * as validation from "../validations/Promotion";

const router = express.Router();

router.get("/:id", controller.getById);

router.get("/", controller.getAll);

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
