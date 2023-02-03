import Basket from "../models/Basket";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const baskets = await Basket.getAll();

    res.json(baskets);
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

    const basket = await Basket.getById(id);

    if (!basket) {
      return res.status(400).json({
        message: "Не удалось найти корзину",
      });
    }

    res.json(basket);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const basket = await Basket.create({
      products: req.body.products,
      userId: req.body.userId,
    });

    res.json(basket);
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

    const basket = await Basket.updateById(id, {
      products: req.body.products,
      userId: req.body.userId,
    });

    if (!basket) {
      return res.status(400).json({
        message: "Не удалось найти корзину",
      });
    }
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

    const basket = await Basket.deleteById(id);

    if (!basket) {
      return res.status(400).json({
        message: "Не удалось найти коризну",
      });
    }

    res.json({
      message: "Корзина успешно удалена",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
