import Category from "../models/Category";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const categories = await Category.getAll();

    res.json(categories);
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

    const category = await Category.getById(id);

    if (!category) {
      return res.status(400).json({
        message: "Не удалось найти категорию",
      });
    }

    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка севера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const category = await Category.create({
      title: req.body.title,
      icon_path: req.body.icon_path,
    });

    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const category = await Category.deleteById(id);

    if (!category) {
      return res.status(400).json({
        message: "Не удалось найти категорию",
      });
    }

    res.json({
      message: "Успешно удалена",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const category = await Category.updateById(id, {
      title: req.body.title,
      icon_path: req.body.icon_path,
    });

    if (!category) {
      return res.status(400).json({
        message: "Не удалось найти категорию",
      });
    }

    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
