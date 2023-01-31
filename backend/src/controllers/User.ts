import User from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await User.getAll();

    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const user = await User.getById(id);

    if (!user) {
      return res.status(400).json({
        message: "Пользователь не найден",
      });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      role: req.body.role,
      email: req.body.email,
      passwordHash: hash,
      phone: req.body.phone,
    });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const updateById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = await User.updateById(id, {
      role: req.body.role,
      email: req.body.email,
      passwordHash: hash,
      phone: req.body.phone,
    });

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти пользователя",
      });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const deleteById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const user = await User.deleteById(id);

    if (!user) {
      return res.status(400).json({
        message: "Не удалось найти пользователя",
      });
    }

    res.json("Пользователь успешно удален");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const singUp = async (req: Request, res: Response) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      role: "user",
      email: req.body.email,
      passwordHash: hash,
      phone: req.body.phone,
    });

    const token = jwt.sign(
      {
        id: user.dataValues.id,
      },
      "qwerty123",
      {
        expiresIn: "1d",
      }
    );

    const { passwordHash, ...userData } = user.dataValues;

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const singIn = async (req: Request, res: Response) => {
  try {
    const reqEmail = req.body.email;

    const user = await User.getByEmail(reqEmail);

    if (!user) {
      return res.status(400).json({
        message: "Не правильный логин или пароль",
      });
    }

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.dataValues.passwordHash
    );

    if (!isValidPassword) {
      return res.status(400).json({
        message: "Не правильный логи нили пароль",
      });
    }

    const token = jwt.sign(
      {
        id: user.dataValues.id,
      },
      "qwerty123",
      {
        expiresIn: "1d",
      }
    );

    const { passwordHash, ...userData } = user.dataValues;

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
