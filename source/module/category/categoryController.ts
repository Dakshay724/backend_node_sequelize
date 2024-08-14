import { Request, Response } from "express";
import categoryService from "./categoryService";
import createResponse from "../../utils/helpers/response";
import status from "../../utils/helpers/status.json";
import appError from "../../utils/helpers/appError";

const createCategory = async (request: Request, response: Response) => {
  try {
    const data = await categoryService.createCategory(request);
    if (!data) {
      throw new appError(status.CONFLICT, "Unable to create category");
    }
    createResponse(response, status.OK, "Category successfully created", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const editCategory = async (request: Request, response: Response) => {
  try {
    const data = await categoryService.editCategory(request);
    createResponse(response, status.OK, "Category successfully updated", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const deleteCategory = async (request: Request, response: Response) => {
  try {
    await categoryService.deleteCategory(request);
    createResponse(response, status.OK, "Category successfully deleted");
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const getCategoryById = async (request: Request, response: Response) => {
  try {
    const data = await categoryService.getCategoryById(
      parseInt(request.params.id)
    );
    if (!data) {
      throw new appError(status.CONFLICT, "unable to get category");
    }
    createResponse(
      response,
      status.OK,
      "Category retrieved successfully",
      data
    );
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const getAllCategories = async (_request: Request, response: Response) => {
  try {
    const data = await categoryService.getAllCategories();
    createResponse(
      response,
      status.OK,
      "Categories retrieved successfully",
      data
    );
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

export default {
  createCategory,
  editCategory,
  deleteCategory,
  getCategoryById,
  getAllCategories,
};
