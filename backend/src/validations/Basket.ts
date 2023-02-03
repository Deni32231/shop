import { body } from "express-validator";

export const create = [body("products", "").notEmpty()];

export const update = [body("products").notEmpty()];
