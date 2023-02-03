import Order from "../models/Order";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const orders = await Order.getAll();

    res.json(orders);
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

    const order = await Order.getById(id);

    if (!order) {
      return res.status(400).json({
        message: "Не удалось найти заказ",
      });
    }

    return res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const order = await Order.create({
      state: "processed",
      products: req.body.products,
    });

    res.json(order);
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

    const order = await Order.updateById(id, {
      state: req.body.state,
      products: req.body.products,
    });

    if (!order) {
      return res.status(400).json({
        message: "Не удалось найти заказ",
      });
    }

    res.json(order);
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

    const order = await Order.deleteById(id);

    if (!order) {
      return res.status(400).json({
        message: "Не удалось найти заказ",
      });
    }

    res.json({
      message: "Успешно удален",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
