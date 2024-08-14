import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../utils/config/database";
import User from "./user";
import Product from "./product";

class Cart extends Model {
  public id!: number;
  public userId!: ForeignKey<User["id"]>;
  public productId!: ForeignKey<Product["id"]>;
  public quantity!: number;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cart",
    timestamps: false,
  }
);

Cart.belongsTo(User, { foreignKey: "userId", as: "user" });
Cart.belongsTo(Product, { foreignKey: "productId", as: "product" });

export default Cart;
