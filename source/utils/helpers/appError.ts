import { AppError } from "./../interfaces/common";

/**
 * Custom error class that extends the built-in Error class and implements the AppError interface.
 * @class appError
 * @extends Error
 * @implements AppError
 * @param {number} statusCode - The HTTP status code associated with the error.
 * @param {string} message - The error message.
 * @param {boolean} [isOperational=true] - Indicates whether the error is operational or not.
 * @param {string} [stack=""] - The stack trace of the error.
 */
class appError extends Error implements AppError {
  status: number;
  isOperational: boolean;

  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = ""
  ) {
    super(message);
    this.status = statusCode || 500;
    this.isOperational = isOperational;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default appError;
