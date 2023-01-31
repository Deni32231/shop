import Subcategory from "../models/Subcategory";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const subcategories = await Subcategory.getAll();

    res.json(subcategories);
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

    const subcategory = await Subcategory.getById(id);

    if (!subcategory) {
      return res.status(400).json({
        message: "Не удалось найти подкатегорию",
      });
    }

    res.json(subcategory);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка севера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const subcategory = await Subcategory.create({
      title: req.body.title,
      img_path: req.body.img_path,
      categoryId: req.body.categoryId,
    });

    res.json(subcategory);
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

    const subcategory = await Subcategory.deleteById(id);

    if (!subcategory) {
      return res.status(400).json({
        message: "Не удалось найти подкатегорию",
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

export const updateById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const subcategory = await Subcategory.updateById(id, {
      title: req.body.title,
      img_path: req.body.img_path,
      categoryId: req.body.categoryId,
    });

    if (!subcategory) {
      return res.status(400).json({
        message: "Не удалось найти подкатегорию",
      });
    }

    res.json(subcategory);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
