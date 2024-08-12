import { Request, Response } from "express";
import { Op } from "sequelize";
import Appointment from "./../../models/appointment";
import Service from "./../../models/service";
import appError from "../../utils/helpers/appError";
import status from "../../utils/helpers/status.json";
import User from "../../models/user";
import Role from "../../models/role";

const getAdminDashboard = async (request: Request) => {
  try {
    const totalAdmins = await Role.count({ where: { name: "admin" } });
    const totalCustomers = await Role.count({
      where: { roleId: "customer" },
    });
    const totalBookings = await Appointment.count();
    const serviceWiseBookings = await Service.findAll({
      include: { model: Appointment },
    });
    const topServices = await Service.findAll({
      // Logic to determine top services
    });
    return {
      topServices,
      totalAdmins,
      totalBookings,
      totalCustomers,
      serviceWiseBookings,
    };
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const getCustomerDashboard = async (request: Request) => {
  return await Appointment.findAll({
    where: { userId: request.params.userId },
  });
};

export default { getAdminDashboard, getCustomerDashboard };
