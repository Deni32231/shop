import { Product as ProductMapping } from "./mapping";

interface IProduct {
  title: string;
  img_path: string;
  price: number;
  quantity: number;
  composition: string;
  weight: string;
  discount: number;
  subcategoryId: number;
  productBrandId: number;
}

class Product {
  async getAll() {
    return await ProductMapping.findAll();
  }

  async getById(id: number) {
    return await ProductMapping.findByPk(id);
  }

  async create(value: IProduct) {
    const product = await ProductMapping.create({
      title: value.title,
      price: value.price,
      quantity: value.quantity,
      composition: value.composition,
      weight: value.weight,
      discount: value.discount,
      subcategoryId: value.subcategoryId,
      productBrandId: value.productBrandId,
    });

    return product;
  }

  async deleteById(id: number) {
    const product = await ProductMapping.findByPk(id);

    if (!product) {
      return null;
    }

    await product.destroy();

    return product;
  }

  async updateById(id: number, value: IProduct) {
    const product = await ProductMapping.findByPk(id);

    if (!product) {
      return null;
    }

    await product.update({
      title: value.title,
      price: value.price,
      quantity: value.quantity,
      composition: value.composition,
      weight: value.weight,
      discount: value.discount,
    });

    return product;
  }
}

export default new Product();
