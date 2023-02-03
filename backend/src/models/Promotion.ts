import { Promotion as PromotionMapping } from "./mapping";

interface IPromotion {
  text: string;
  img_path: string;
}

class Promotion {
  async getAll() {
    return await PromotionMapping.findAll();
  }

  async getById(id: number) {
    return await PromotionMapping.findByPk(id);
  }

  async create(data: IPromotion) {
    const promotion = await PromotionMapping.create({
      text: data.text,
      img_path: data.img_path,
    });

    return promotion;
  }

  async updateById(id: number, data: IPromotion) {
    const promotion = await PromotionMapping.findByPk(id);

    if (!promotion) {
      return null;
    }

    await promotion.update({
      text: data.text,
      img_path: data.img_path,
    });

    return promotion;
  }

  async deleteById(id: number) {
    const promotion = await PromotionMapping.findByPk(id);

    if (!promotion) {
      return null;
    }

    await promotion.destroy();

    return promotion;
  }
}

export default new Promotion();
