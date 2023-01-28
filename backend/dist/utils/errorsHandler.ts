import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
