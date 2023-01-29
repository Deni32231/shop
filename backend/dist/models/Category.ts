import { Category as CategoryMapping } from "./mapping";

class Category {
  async getAll() {
    return await CategoryMapping.findAll();
  }

  async getById(id: number) {
    return await CategoryMapping.findByPk(id);
  }

  async create(title: string, icon_path: string) {
    const category = await CategoryMapping.create({
      title,
      icon_path,
    });

    return category;
  }

  async deleteById(id: number) {
    const category = await CategoryMapping.findByPk(id);

    if (!category) {
      throw new Error("Категория не найдена");
    }

    category.destroy();

    return category;
  }

  async updateById(id: number, value: { title: string; icon_path: string }) {
    const category = await CategoryMapping.findByPk(id);

    if (!category) {
      throw new Error("Категория не найдена");
    }

    await category.update({
      title: value.title,
      icon_path: value.icon_path,
    });

    return category;
  }
}

export default new Category();
