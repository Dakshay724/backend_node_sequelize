import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../utils/config/database";
import User from "./user";
import Product from "./product";

class Order extends Model {
  public id!: number;
  public userId!: ForeignKey<User["id"]>;
  public productId!: ForeignKey<Product["id"]>;
  public quantity!: number;
  public status!: string;
  public totalPrice!: number;
}

Order.init(
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
    status: {
      type: DataTypes.ENUM(
        "open",
        "preparing",
        "ready",
        "dispatched",
        "out for delivery",
        "completed"
      ),
      defaultValue: "open",
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
    timestamps: false,
  }
);

Order.belongsTo(User, { foreignKey: "userId", as: "user" });
Order.belongsTo(Product, { foreignKey: "productId", as: "product" });

export default Order;
