import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE || "googleDrive",
  process.env.USER || "postgres",
  process.env.PASSWORD || "123456789",

  {
    port: 5432,
    host: "localhost",
    dialect: "postgres",
  }
);

export default sequelize;
