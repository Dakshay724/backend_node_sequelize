"use strict";

import { Request, Response } from "express";
import createResponse from "../../utils/helpers/response";
import status from "../../utils/helpers/status.json";
import { createToken } from "../../utils/helpers/common";

import appError from "../../utils/helpers/appError";
import roleService from "./roleService";

/**
 * Handles the admin login functionality.
 * @param {Request} request - The request object.
 * @param {Response} response - The response object.
 * @returns None
 * @throws {appError} If the user is not valid or an error occurs during token creation.
 */
const createRole = async (request: Request, response: Response) => {
  try {
    const data: any = await roleService.createRole(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to create role");
    }

    createResponse(response, status.OK, "role successfully created", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

/**
 * Handles the admin login functionality.
 * @param {Request} request - The request object.
 * @param {Response} response - The response object.
 * @returns None
 * @throws {appError} If the user is not valid or an error occurs during token creation.
 */
const editRole = async (request: Request, response: Response) => {
  try {
    console.log(request.params.id, "is======");

    const data: any = await roleService.editRole(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to edit role");
    }

    createResponse(response, status.OK, "role updated successfully", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const deleteRole = async (request: Request, response: Response) => {
  try {
    const data: any = await roleService.deleteRole(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to delete role");
    }

    createResponse(response, status.OK, "role deleted successfully", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const getRole = async (request: Request, response: Response) => {
  try {
    const data: any = await roleService.getRole(request);
    if (!data) {
      throw new appError(status.CONFLICT, "unable to get role");
    }

    createResponse(response, status.OK, "role successfully fetched", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

export = { editRole, createRole, getRole, deleteRole };
