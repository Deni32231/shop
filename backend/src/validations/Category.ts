import { body } from "express-validator";

export const create = [
  body("title", "Название категории должно быть минимум 3 символа").isLength({
    min: 3,
  }),
  body("icon_path", "Путь к иконке должен быть минимум 3 символа").isLength({
    min: 3,
  }),
];

export const update = [
  body("title", "Название категории должно быть минимум 3 символа")
    .optional()
    .isLength({
      min: 3,
    }),
  body("icon_path", "Путь к иконке должен быть минимум 3 символа")
    .optional()
    .isLength({
      min: 3,
    }),
];
