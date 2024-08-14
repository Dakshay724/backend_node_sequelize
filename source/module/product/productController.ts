import { Request, Response } from "express";
import productService from "./productService"; // Adjust the import path as needed
import createResponse from "../../utils/helpers/response";
import status from "../../utils/helpers/status.json";
import appError from "../../utils/helpers/appError";

const createProduct = async (request: Request, response: Response) => {
  try {
    const data = await productService.createProduct(request);
    if (!data) {
      throw new appError(status.CONFLICT, "Unable to create product");
    }
    createResponse(response, status.OK, "Product successfully created", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const editProduct = async (request: Request, response: Response) => {
  try {
    const data = await productService.editProduct(request);
    createResponse(response, status.OK, "Product successfully updated", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const deleteProduct = async (request: Request, response: Response) => {
  try {
    await productService.deleteProduct(request);
    createResponse(response, status.OK, "Product successfully deleted");
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const getProductById = async (request: Request, response: Response) => {
  try {
    const data = await productService.getProductById(
      parseInt(request.params.id)
    );
    if (!data) {
      throw new appError(status.CONFLICT, "unable to get product");
    }
    createResponse(response, status.OK, "Product retrieved successfully", data);
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

const getAllProducts = async (_request: Request, response: Response) => {
  try {
    const data = await productService.getAllProducts();
    createResponse(
      response,
      status.OK,
      "Products retrieved successfully",
      data
    );
  } catch (error: any) {
    createResponse(response, error.status, error.message);
  }
};

export default {
  createProduct,
  editProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
};
