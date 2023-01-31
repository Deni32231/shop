import { User as UserMapping } from "./mapping";

interface IUser {
  role: "user" | "admin";
  email: string;
  passwordHash: string;
  phone: number;
}

class User {
  async getAll() {
    return UserMapping.findAll();
  }

  async getById(id: number) {
    return UserMapping.findByPk(id);
  }

  async create(data: IUser) {
    const user = await UserMapping.create({
      role: data.role,
      email: data.email,
      passwordHash: data.passwordHash,
      phone: data.phone,
    });

    return user;
  }

  async updateById(id: number, data: IUser) {
    const user = await UserMapping.findByPk(id);

    if (!user) {
      return null;
    }

    await user.update({
      role: data.role,
      email: data.email,
      passwordHash: data.passwordHash,
      phone: data.phone,
    });

    return user;
  }

  async deleteById(id: number) {
    const user = await UserMapping.findByPk(id);

    if (!user) {
      return null;
    }

    await user.destroy();

    return user;
  }

  async getByEmail(email: string) {
    const user = await UserMapping.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return user;
  }
}

export default new User();
