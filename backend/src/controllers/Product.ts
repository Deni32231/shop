import Product from "../models/Product";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const products = await Product.getAll();

    res.json(products);
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

    const product = await Product.getById(id);

    if (!product) {
      return res.status(400).json({
        message: "Не удалось найти товар",
      });
    }

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const product = await Product.create({
      title: req.body.title,
      img_path: req.body.img_path,
      price: req.body.price,
      quantity: req.body.quantity,
      composition: req.body.composition,
      weight: req.body.weight,
      discount: req.body.discount,
      subcategoryId: req.body.subcategoryId,
      productBrandId: req.body.productBrandId,
    });

    res.json(product);
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

    const product = await Product.deleteById(id);

    if (!product) {
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

    const product = await Product.updateById(id, {
      title: req.body.title,
      img_path: req.body.img_path,
      price: req.body.price,
      quantity: req.body.quantity,
      composition: req.body.composition,
      weight: req.body.weight,
      discount: req.body.discount,
      subcategoryId: req.body.subcategoryId,
      productBrandId: req.body.productBrandId,
    });

    if (!product) {
      return res.status(400).json({
        message: "Не удалось найти продукт",
      });
    }

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
