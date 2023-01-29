import sequelize from "../sequelize";
import { DataTypes } from "sequelize";

export const Category = sequelize.define("category", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  icon_path: {
    type: DataTypes.STRING,
  },
});

export const Subcategory = sequelize.define("subcategory", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  img_path: {
    type: DataTypes.STRING,
  },
});

export const Product = sequelize.define("product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  img_path: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  composition: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.STRING,
  },
  discount: {
    type: DataTypes.FLOAT,
  },
});

export const ProductBrand = sequelize.define("product_brand", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export const Promotion = sequelize.define("promotion", {
  text: {
    type: DataTypes.STRING,
  },
  img_path: {
    type: DataTypes.STRING,
  },
});

export const Vacancy = sequelize.define("vacancy", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsibilities: {
    type: DataTypes.STRING,
  },
});

export const User = sequelize.define("user", {
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
});

export const Basket = sequelize.define("basket", {
  products: {
    type: DataTypes.JSONB,
  },
});

export const Order = sequelize.define("order", {
  state: {
    type: DataTypes.ENUM("processed", "delivered", "cancelled"),
    allowNull: false,
    defaultValue: "processed",
  },
  products: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

export const initDB = () => {
  Category.hasOne(Subcategory);
  Subcategory.belongsTo(Category);

  Subcategory.hasOne(Product);
  Product.belongsTo(Subcategory);

  ProductBrand.hasOne(Product);
  Product.belongsTo(ProductBrand);

  User.hasOne(Basket);
  Basket.belongsTo(User);

  User.hasOne(Order);
  Order.belongsTo(User);

  sequelize.sync();
};
