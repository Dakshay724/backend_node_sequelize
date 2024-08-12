import { Request } from "express";
import { Op } from "sequelize";
import Appointment from "./../../models/appointment";
import appError from "../../utils/helpers/appError";
import status from "../../utils/helpers/status.json";

const bookAppointment = async (request: Request) => {
  try {
    const { userId, serviceId, startTime, endTime } = request.body;
    const conflictingAppointments = await Appointment.findAll({
      where: {
        serviceId,
        startTime: {
          [Op.lte]: endTime,
        },
        endTime: {
          [Op.gte]: startTime,
        },
      },
    });

    if (conflictingAppointments.length > 0) {
      throw new appError(status.BAD_REQUEST, "Time slot is already booked");
    }

    return await Appointment.create({
      userId,
      serviceId,
      startTime,
      endTime,
    });
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const getAppointments = async (request: Request) => {
  return await Appointment.findAll();
};

export default { bookAppointment, getAppointments };
