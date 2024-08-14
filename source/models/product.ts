import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../utils/config/database";
import Category from "./category";

class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public images!: string[];
  public categoryId!: ForeignKey<Category["id"]>;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        len: [1, 5],
      },
    },
  },
  {
    sequelize,
    modelName: "Product",
    timestamps: false,
  }
);

Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

export default Product;
