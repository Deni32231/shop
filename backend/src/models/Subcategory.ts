import { Subcategory as SubcategoryMapping } from "./mapping";

interface ISubcategory {
  title: string;
  img_path: string;
  categoryId: number;
}

class Subcategory {
  async getAll() {
    return await SubcategoryMapping.findAll();
  }

  async getById(id: number) {
    return await SubcategoryMapping.findByPk(id);
  }

  async create(data: ISubcategory) {
    const subcategory = await SubcategoryMapping.create({
      title: data.title,
      img_path: data.img_path,
      categoryId: data.categoryId,
    });

    return subcategory;
  }

  async deleteById(id: number) {
    const subcategory = await SubcategoryMapping.findByPk(id);

    if (!subcategory) {
      return null;
    }

    await subcategory.destroy();

    return subcategory;
  }

  async updateById(id: number, data: ISubcategory) {
    const subcategory = await SubcategoryMapping.findByPk(id);

    if (!subcategory) {
      return null;
    }

    await subcategory.update({
      title: data.title,
      img_path: data.img_path,
      categoryId: data.categoryId,
    });

    return subcategory;
  }
}

export default new Subcategory();
