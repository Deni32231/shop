import { ProductBrand as ProductBrandMapping } from "./mapping";

interface IProductBrand {
  title: string;
}

class ProductBrand {
  async getAll() {
    return await ProductBrandMapping.findAll();
  }

  async getById(id: number) {
    return await ProductBrandMapping.findByPk(id);
  }

  async create(data: IProductBrand) {
    const productBrand = await ProductBrandMapping.create({
      title: data.title,
    });

    return productBrand;
  }

  async updateById(id: number, data: IProductBrand) {
    const productBrand = await ProductBrandMapping.findByPk(id);

    if (!productBrand) {
      return null;
    }

    productBrand.update({
      title: data.title,
    });

    return productBrand;
  }

  async deleteById(id: number) {
    const productBrand = await ProductBrandMapping.findByPk(id);

    if (!productBrand) {
      return null;
    }

    await productBrand.destroy();

    return productBrand;
  }
}

export default new ProductBrand();
