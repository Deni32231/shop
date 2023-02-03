import { deleteById } from "../controllers/Category";
import { Basket as BasketMapping } from "./mapping";

interface IBusket {
  products: [{ id: number; count: number }];
  userId: number;
}

class Basket {
  async getAll() {
    return await BasketMapping.findAll();
  }

  async getById(id: number) {
    return await BasketMapping.findByPk(id);
  }

  async create(data: IBusket) {
    const basket = await BasketMapping.create({
      products: data.products,
    });

    return basket;
  }

  async updateById(id: number, data: IBusket) {
    const basket = await BasketMapping.findByPk(id);

    if (!basket) {
      return null;
    }

    await basket.update({
      products: data.products,
    });

    return basket;
  }

  async deleteById(id: number) {
    const basket = await BasketMapping.findByPk(id);

    if (!basket) {
      return null;
    }

    await basket.destroy();

    return basket;
  }

  async createBasketForUser(userId: number) {
    const basket = await BasketMapping.create({
      products: null,
      userId,
    });

    return basket;
  }
}

export default new Basket();
