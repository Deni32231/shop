import { Sequelize } from "sequelize";

const sequelize = new Sequelize("shop", "root", "root", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

(async () => {
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;
