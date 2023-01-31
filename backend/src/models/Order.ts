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
}
