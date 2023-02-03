import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, "qwerty123");

      if (typeof decoded !== "object") {
        return res.status(400).json({
          message: "Нет доступа",
        });
      }

      req.body.userId = decoded.userId;

      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Ошибка сервера",
      });
    }
  } else {
    return res.status(400).json({
      message: "Нет доступа",
    });
  }
};
