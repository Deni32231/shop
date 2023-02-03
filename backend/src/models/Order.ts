import { Order as OrderMapping } from "./mapping";

interface IOrder {
  state: "processed" | "delivered" | "cancelled";
  products: [{ id: number; count: number }];
}

class Order {
  async getAll() {
    return await OrderMapping.findAll();
  }

  async getById(id: number) {
    return await OrderMapping.findByPk(id);
  }

  async create(data: IOrder) {
    const order = await OrderMapping.create({
      state: "processed",
      products: data.products,
    });

    return order;
  }

  async updateById(id: number, data: IOrder) {
    const order = await OrderMapping.findByPk(id);

    if (!order) {
      return null;
    }

    await order.update({
      state: data.state,
      products: data.products,
    });

    return order;
  }

  async deleteById(id: number) {
    const order = await OrderMapping.findByPk(id);

    if (!order) {
      return null;
    }

    await order.destroy();

    return order;
  }
}

export default new Order();
