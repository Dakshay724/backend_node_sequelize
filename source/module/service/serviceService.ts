import { Request, Response } from "express";
import { Op } from "sequelize";
import Appointment from "./../../models/appointment";
import Service from "./../../models/service";
import TimingSlot from "./../../models/timeSlot";

import appError from "../../utils/helpers/appError";
import status from "../../utils/helpers/status.json";

const createService = async (request: Request) => {
  try {
    const { name, description, pdf } = request.body;
    const service = await Service.create({ name, description, pdf });

    // Create default timing slots
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const startTime = "10:00:00";
    const endTime = "18:00:00";
    for (const day of days) {
      for (let hour = 10; hour <= 17; hour++) {
        await TimingSlot.create({
          dayOfWeek: day,
          startTime: `${hour}:00:00`,
          endTime: `${hour + 1}:00:00`,
        });
      }
    }

    return service;
  } catch (error) {
    throw new appError(status.INTERNAL_SERVER_ERROR, "something went wrong");
  }
};

const getServices = async (request: Request) => {
  return await Service.findAll();
};

const updateService = async (request: Request) => {
  try {
    const { id } = request.params;
    const { name, description, pdf } = request.body;
    const [updated] = await Service.update(
      { name, description, pdf },
      { where: { id } }
    );
    if (updated) {
      return await Service.findByPk(id);
    } else {
      throw new appError(status.NOT_FOUND, "service not found");
    }
  } catch (error) {
    throw new appError(status.INTERNAL_SERVER_ERROR, "something went wrong");
  }
};

const deleteService = async (request: Request) => {
  try {
    const { id } = request.params;
    const deleted = await Service.destroy({ where: { id } });
    if (!deleted) {
      throw new appError(status.NOT_FOUND, "service is not found");
    }
    return deleted;
  } catch (error) {
    throw new appError(status.INTERNAL_SERVER_ERROR, "something went wrong");
  }
};

export default { deleteService, updateService, getServices, createService };
