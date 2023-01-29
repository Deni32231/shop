import CategoryModel from "../models/Category";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.findAll();

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

    const category = await CategoryModel.findById(id);

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
    const category = await CategoryModel.create(
      req.body.title,
      req.body.icon_path
    );

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

    await CategoryModel.findByIdAndDelete(id);

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

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const category = await CategoryModel.findByIdAndUpdate(id, {
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
