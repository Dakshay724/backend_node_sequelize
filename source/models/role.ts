import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/config/database";
class Role extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Role",
    timestamps: false,
  }
);

export default Role;
