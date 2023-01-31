import { body } from "express-validator";

export const create = [
  body("email").optional().isEmail(),
  body("password").optional().isLength({ min: 6 }),
  body("phone").optional().isMobilePhone("ru-RU"),
];

export const update = [
  body("email").optional().isEmail(),
  body("password").optional().isLength({ min: 6 }),
  body("phone").optional().isMobilePhone("ru-RU"),
];

export const singIn = [body("email").isEmail(), body("password").notEmpty()];

export const singUp = [
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  body("phone").isMobilePhone("ru-RU"),
];
