import { Category } from "./mapping";

class CategoryModel {
  async findAll() {
    return await Category.findAll();
  }

  async findById(id: number) {
    return await Category.findByPk(id);
  }

  async create(title: string, icon_path: string) {
    const category = await Category.create({
      title,
      icon_path,
    });

    return category;
  }

  async findByIdAndDelete(id: number) {
    const category = await Category.findByPk(id);

    if (!category) {
      return category;
    }

    category.destroy();

    return category;
  }

  async findByIdAndUpdate(
    id: number,
    value: { title: string; icon_path: string }
  ) {
    const category = await Category.findByPk(id);

    if (!category) {
      return category;
    }

    await category.update({
      title: value.title,
      icon_path: value.icon_path,
    });

    return category;
  }
}

export default new CategoryModel();
