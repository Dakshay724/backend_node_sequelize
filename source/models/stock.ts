import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../utils/config/database";
import Product from "./product";

class Stock extends Model {
  public id!: number;
  public productId!: ForeignKey<Product["id"]>;
  public quantityIn!: number;
  public quantityOut!: number;
  public balance!: number;
}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantityIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    quantityOut: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Stock",
    timestamps: false,
  }
);

Stock.belongsTo(Product, { foreignKey: "productId", as: "product" });

export default Stock;
