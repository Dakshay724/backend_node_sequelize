import { Request, Response } from "express";
import serviceService from "./serviceService";
import status from "../../utils/helpers/status.json";
import appError from "../../utils/helpers/appError";
import createResponse from "../../utils/helpers/response";

const createService = async (request: Request, response: Response) => {
  try {
    const data: any = await serviceService.createService(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to create service");
    }

    createResponse(response, status.OK, "service created successfully", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const getServices = async (request: Request, response: Response) => {
  try {
    const data: any = await serviceService.getServices(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to get services");
    }

    createResponse(
      response,
      status.OK,
      "services successfully retrieved",
      data
    );
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const updateService = async (request: Request, response: Response) => {
  try {
    const data: any = await serviceService.updateService(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to update service");
    }

    createResponse(response, status.OK, "service updated successfully", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const deleteService = async (request: Request, response: Response) => {
  try {
    const data: any = await serviceService.deleteService(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to delete service");
    }

    createResponse(response, status.OK, "service deleted successfully", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

export default { createService, deleteService, getServices, updateService };
