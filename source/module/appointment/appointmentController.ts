import { Request, Response } from "express";
import appointmentService from "./appointmentService";
import status from "../../utils/helpers/status.json";
import appError from "../../utils/helpers/appError";
import createResponse from "../../utils/helpers/response";

const bookAppointment = async (request: Request, response: Response) => {
  try {
    const data: any = await appointmentService.bookAppointment(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to book appointment");
    }

    createResponse(
      response,
      status.OK,
      "appointment booked successfully",
      data
    );
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const getAppointments = async (request: Request, response: Response) => {
  try {
    const data: any = await appointmentService.getAppointments(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to get appointments");
    }

    createResponse(
      response,
      status.OK,
      "all appointments has been fetched",
      data
    );
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

export default { bookAppointment, getAppointments };
