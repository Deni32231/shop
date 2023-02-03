import { body } from "express-validator";

export const create = [
  body("title", "Должность должна быть больше 2 символов").isLength({
    min: 3,
  }),
  body("salary").isLength({ min: 2 }),
  body("responsibilities").isLength({ min: 2 }),
];

export const update = [
  body("text", "Должность должна быть больше 2 символов").isLength({
    min: 3,
  }),
  body("salary").isLength({ min: 2 }),
  body("responsibilities").isLength({ min: 2 }),
];
