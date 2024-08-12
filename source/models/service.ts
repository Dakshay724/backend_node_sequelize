// src/models/Service.ts

import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/config/database";

class Service extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public pdfAttachment?: string;
}

Service.init(
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
    pdfAttachment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Service",
    timestamps: false,
  }
);

export default Service;
