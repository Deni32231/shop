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

  async create(data: IProduct) {
    const product = await ProductMapping.create({
      title: data.title,
      price: data.price,
      quantity: data.quantity,
      composition: data.composition,
      weight: data.weight,
      discount: data.discount,
      subcategoryId: data.subcategoryId,
      productBrandId: data.productBrandId,
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

  async updateById(id: number, data: IProduct) {
    const product = await ProductMapping.findByPk(id);

    if (!product) {
      return null;
    }

    await product.update({
      title: data.title,
      price: data.price,
      quantity: data.quantity,
      composition: data.composition,
      weight: data.weight,
      discount: data.discount,
    });

    return product;
  }
}

export default new Product();
