import ProductBrand from "../models/ProductBrand";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const productBrand = await ProductBrand.getAll();

    res.json(productBrand);
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

    const productBrand = await ProductBrand.getById(id);

    if (!productBrand) {
      return res.status(400).json({
        message: "Не удалось найти товар",
      });
    }

    res.json(productBrand);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const productBrand = await ProductBrand.create({
      title: req.body.title,
    });

    res.json(productBrand);
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

    const productBrand = await ProductBrand.deleteById(id);

    if (!productBrand) {
      return res.status(400).json({
        message: "Не удалось найти продукт",
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

    const productBrand = await ProductBrand.updateById(id, {
      title: req.body.title,
    });

    if (!productBrand) {
      return res.status(400).json({
        message: "Не удалось найти продукт",
      });
    }

    res.json(productBrand);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
