import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../utils/config/database";
import Role from "./role";
import Category from "./category";

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public profileImage!: string;
  public mobile!: string;
  public password!: string;
  public isApproved!: boolean;
  public categoryId!: ForeignKey<Category["id"]>;
  public roleId!: ForeignKey<Role["id"]>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false,
  }
);
User.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
User.belongsTo(Role, { foreignKey: "roleId", as: "role" });

export default User;
