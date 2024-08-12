import { Model, DataTypes, ForeignKey } from "sequelize";
import sequelize from "../utils/config/database";
import User from "./user";
import Service from "./service";

class Appointment extends Model {
  public id!: number;
  public date!: Date;
  public timeSlot!: string;
  public userId!: ForeignKey<User["id"]>;
  public serviceId!: ForeignKey<Service["id"]>;
}

Appointment.init(
  {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    timeSlot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Appointment",
    timestamps: false,
  }
);
Appointment.belongsTo(User, { foreignKey: "userId", as: "user" });
Appointment.belongsTo(Service, { foreignKey: "serviceId", as: "service" });

export default Appointment;
