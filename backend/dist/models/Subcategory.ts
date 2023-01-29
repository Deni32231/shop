import { Subcategory } from "./mapping";

class SubcategoryModel {
  async findAll() {
    return await Subcategory.findAll();
  }

  async findById(id: number) {
    return await Subcategory.findByPk(id);
  }

  async create(title: string, img_path: string, categoryId: number) {
    const subcategory = await Subcategory.create({
      title,
      img_path,
      categoryId,
    });

    return subcategory;
  }

  async findByIdAndDelete(id: number) {
    const subcategory = await Subcategory.findByPk(id);

    if (!subcategory) {
      return subcategory;
    }

    subcategory.destroy();

    return subcategory;
  }

  async findByIdAndUpdate(
    id: number,
    value: { title: string; img_path: string; categoryId: number }
  ) {
    const subcategory = await Subcategory.findByPk(id);

    if (!subcategory) {
      return subcategory;
    }

    await subcategory.update({
      title: value.title,
      img_path: value.img_path,
      categoryId: value.categoryId,
    });

    return subcategory;
  }
}

export default new SubcategoryModel();
