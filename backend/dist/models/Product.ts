import { Product as ProductMapping } from "./mapping";

interface IProduct {
  title: string;
  img_path: string;
  price: number;
  quantity: number;
  composition: string;
  weight: string;
  discount: number;
}

class Product {
  async getAll(id: number) {
    return await ProductMapping.findAll();
  }

  async findAll(id: number) {
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
    });

    return product;
  }

  async update(id: number, value: IProduct) {
    const product = await ProductMapping.findByPk(id);

    if (!product) {
      return product;
    }
  }
}

export default new Product();
