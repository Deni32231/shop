import { body } from "express-validator";

export const create = [
  body("title", "Название товара должно быть минимум 3 символа").isLength({
    min: 3,
  }),
  body(
    "img_path",
    "Путь к картинке товара должен быть минимум 3 символа"
  ).isLength({
    min: 3,
  }),
  body("price", "Цена должна быть числовым значением в рублях").isNumeric(),
  body("quantity").optional().isInt(),
  body("composition").optional().isLength({ min: 4 }),
  body("weight").optional().isLength({ min: 4 }),
  body("discount").optional().isNumeric(),
];

export const update = [
  body("title", "Название товара должно быть минимум 3 символа")
    .optional()
    .isLength({
      min: 3,
    }),
  body("img_path", "Путь к картинке товара должен быть минимум 3 символа")
    .optional()
    .isLength({
      min: 3,
    }),
  body("price", "Цена должна быть числовым значением в рублях")
    .optional()
    .isNumeric(),
  body("quantity").optional().isInt(),
  body("composition").optional().isLength({ min: 4 }),
  body("weight").optional().isLength({ min: 4 }),
  body("discount").optional().isNumeric(),
];
