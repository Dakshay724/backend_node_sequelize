import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../utils/config/database";
import Product from "./product";
import Category from "./category";

class ProductPrice extends Model {
  public id!: number;
  public price!: number;
  public productId!: ForeignKey<Product["id"]>;
  public categoryId!: ForeignKey<Category["id"]>;
}

ProductPrice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ProductPrice",
    timestamps: false,
  }
);

ProductPrice.belongsTo(Product, { foreignKey: "productId", as: "product" });
ProductPrice.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

export default ProductPrice;
