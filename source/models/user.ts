import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../utils/config/database";
import Role from "./role";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public roleId!: ForeignKey<Role["id"]>;
}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
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

// Define association
User.belongsTo(Role, { foreignKey: "roleId", as: "role" });

export default User;
