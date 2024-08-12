import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/config/database";

class TimingSlot extends Model {
  public id!: number;
  public dayOfWeek!: string;
  public startTime!: string;
  public endTime!: string;
}

TimingSlot.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dayOfWeek: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "TimingSlot",
    timestamps: false,
  }
);

export default TimingSlot;
