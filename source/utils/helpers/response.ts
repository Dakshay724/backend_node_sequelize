import { Response } from "express";
import { apiResponse } from "./../interfaces/common";

/**
 * Creates a response object with the specified status, message, and payload.
 * @param {Response} response - The response object to set the status and send the JSON data.
 * @param {number} [status=500] - The HTTP status code of the response. Default is 500 (Internal Server Error).
 * @param {string} [message="Internal Server Error"] - The message to include in the response.
 * @param {Array<object> | object} [payload] - The data to include in the response.
 * @returns {Response<apiResponse>} - The response object with the specified status, message, and payload.
 */
const createResponse = (
  response: Response,
  status: number = 500,
  message: string = "Internal Server error",
  payload?: Array<object> | object
): Response<apiResponse> => {
  console.log("response error-----", message);
  if (status === 500) {
    return response.status(status).json({
      message: "Internal Server error",
    });
  }
  return response.status(status).json({
    message: message,
    data: payload,
  });
};

export default createResponse;
