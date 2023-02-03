import { body } from "express-validator";

export const create = [
  body("state", "processed или delivered или cancelled").isIn([
    "processed",
    "delivered",
    "cancelled",
  ]),
  body("products", "").notEmpty(),
];

export const update = [
  body("state", "processed или delivered или cancelled").isIn([
    "processed",
    "delivered",
    "cancelled",
  ]),
  body("products").notEmpty(),
];
