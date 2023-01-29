import { Category as CategoryMapping } from "./mapping";

interface ICategory {
  title: string;
  icon_path: string;
}

class Category {
  async getAll() {
    return await CategoryMapping.findAll();
  }

  async getById(id: number) {
    return await CategoryMapping.findByPk(id);
  }

  async create(value: ICategory) {
    const category = await CategoryMapping.create({
      title: value.title,
      icon_path: value.icon_path,
    });

    return category;
  }

  async deleteById(id: number) {
    const category = await CategoryMapping.findByPk(id);

    if (!category) {
      return null;
    }

    category.destroy();

    return category;
  }

  async updateById(id: number, value: ICategory) {
    const category = await CategoryMapping.findByPk(id);

    if (!category) {
      return null;
    }

    await category.update({
      title: value.title,
      icon_path: value.icon_path,
    });

    return category;
  }
}

export default new Category();
