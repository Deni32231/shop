import Vacancy from "../models/Vacancy";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    const vacancies = await Vacancy.getAll();

    res.json(vacancies);
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

    const vacancy = await Vacancy.getById(id);

    if (!vacancy) {
      return res.status(400).json({
        message: "Не удалось найти вакансию",
      });
    }

    res.json(vacancy);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const vacancy = await Vacancy.create({
      title: req.body.title,
      salary: req.body.salary,
      responsibilities: req.body.responsibilities,
    });

    res.json(vacancy);
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

    const vacancy = await Vacancy.updateById(id, {
      title: req.body.title,
      salary: req.body.salary,
      responsibilities: req.body.responsibilities,
    });

    if (!vacancy) {
      return res.status(400).json({
        message: "Не удалось найти вакансию",
      });
    }

    res.json(vacancy);
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

    const vacancy = await Vacancy.deleteById(id);

    if (!vacancy) {
      return res.status(400).json({
        message: "Не удалось вакансию",
      });
    }

    res.json({
      message: "Удачно удален",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Ошибка сервера",
    });
  }
};
