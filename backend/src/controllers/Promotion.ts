import Promotion from "../models/Promotion";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const promotions = await Promotion.getAll();

    res.json(promotions);
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

    const promotion = await Promotion.getById(id);

    if (!promotion) {
      return res.status(400).json({
        message: "Акция не найдена",
      });
    }

    res.json(promotion);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const promotion = await Promotion.create({
      text: req.body.text,
      img_path: req.body.img_path,
    });

    res.json(promotion);
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

    const promotion = await Promotion.updateById(id, {
      text: req.body.text,
      img_path: req.body.img_path,
    });

    if (!promotion) {
      return res.status(400).json({
        message: "Не удалось найти акцию",
      });
    }

    res.json(promotion);
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

    const promotion = await Promotion.deleteById(id);

    if (!promotion) {
      return res.status(400).json({
        message: "Не удалось найти акцию",
      });
    }

    res.json({
      message: "Акция успешно удалена",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
