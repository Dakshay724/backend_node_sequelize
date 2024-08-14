"use strict";

import { Request, Response } from "express";
import createResponse from "../../utils/helpers/response";
import status from "../../utils/helpers/status.json";
import { createToken } from "../../utils/helpers/common";
import appError from "../../utils/helpers/appError";
import userService from "./userService";

const registerUser = async (request: Request, response: Response) => {
  try {
    request.body.email = request.body.email.toLowerCase();
    const data = await userService.registerUser(request);
    if (!data) {
      throw new appError(status.CONFLICT, "User registration failed");
    }
    createResponse(response, status.OK, "User successfully registered", data);
  } catch (error: any) {
    console.log(error);
    createResponse(response, error.status, error.message);
  }
};

const loginUser = async (request: Request, response: Response) => {
  try {
    request.body.email = request.body.email.toLowerCase();

    const data: any = await userService.loginUser(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unbale to login");
    }
    const user: any = await createToken(data);

    createResponse(response, status.OK, "user successfully logged in", user);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const approveRequest = async (request: Request, response: Response) => {
  try {
    const data: any = await userService.approveRequest(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to approve request");
    }

    createResponse(response, status.OK, "request successfilly accepted", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

export default { loginUser, registerUser, approveRequest };
