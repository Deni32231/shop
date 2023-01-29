import SubcategoryModel from "../models/Subcategory";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const subcategory = await SubcategoryModel.findAll();

    res.json(subcategory);
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

    const subcategory = await SubcategoryModel.findById(id);

    if (!subcategory) {
      return res.status(400).json({
        message: "Не удалось найти категорию",
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
    const subcategory = await SubcategoryModel.create(
      req.body.title,
      req.body.img_path,
      req.body.categoryId
    );

    res.json(subcategory);
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

    await SubcategoryModel.findByIdAndDelete(id);

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

    const subcategory = await SubcategoryModel.findByIdAndUpdate(id, {
      title: req.body.title,
      img_path: req.body.img_path,
      categoryId: req.body.categoryId,
    });

    if (!subcategory) {
      return res.status(400).json({
        message: "Не удалось найти категорию",
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