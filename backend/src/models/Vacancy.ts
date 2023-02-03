import { Vacancy as VacancyMapping } from "./mapping";

interface IVacancy {
  title: string;
  salary: string;
  responsibilities: string;
}

class Vacancy {
  async getAll() {
    return VacancyMapping.findAll();
  }

  async getById(id: number) {
    return VacancyMapping.findByPk(id);
  }

  async create(data: IVacancy) {
    const vacancy = await VacancyMapping.create({
      title: data.title,
      salary: data.salary,
      responsibilities: data.responsibilities,
    });

    return vacancy;
  }

  async updateById(id: number, data: IVacancy) {
    const vacancy = await VacancyMapping.findByPk(id);

    if (!vacancy) {
      return null;
    }

    await vacancy.update({
      title: data.title,
      salary: data.salary,
      responsibilities: data.responsibilities,
    });

    return vacancy;
  }

  async deleteById(id: number) {
    const vacancy = await VacancyMapping.findByPk(id);

    if (!vacancy) {
      return null;
    }

    await vacancy.destroy();

    return vacancy;
  }
}

export default new Vacancy();
