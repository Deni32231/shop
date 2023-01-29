import { Subcategory as SubcategoryMapping } from "./mapping";

class Subcategory {
  async getAll() {
    return await SubcategoryMapping.findAll();
  }

  async getById(id: number) {
    return await SubcategoryMapping.findByPk(id);
  }

  async create(title: string, img_path: string, categoryId: number) {
    const subcategory = await SubcategoryMapping.create({
      title,
      img_path,
      categoryId,
    });

    return subcategory;
  }

  async deleteById(id: number) {
    const subcategory = await SubcategoryMapping.findByPk(id);

    if (!subcategory) {
      throw new Error("Подкатегория не найдена");
    }

    subcategory.destroy();

    return subcategory;
  }

  async updateById(
    id: number,
    value: { title: string; img_path: string; categoryId: number }
  ) {
    const subcategory = await SubcategoryMapping.findByPk(id);

    if (!subcategory) {
      throw new Error("Подкатегория не найдена");
    }

    await subcategory.update({
      title: value.title,
      img_path: value.img_path,
      categoryId: value.categoryId,
    });

    return subcategory;
  }
}

export default new Subcategory();
