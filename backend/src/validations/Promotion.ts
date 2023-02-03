import { body } from "express-validator";

export const create = [
  body("text", "Текст акции должен быть больше 2 символов").isLength({
    min: 3,
  }),
];

export const update = [
  body("text", "Текст акции должен быть больше 2 символов").isLength({
    min: 3,
  }),
];
