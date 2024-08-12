import Joi from "joi";
export interface AppError {
  status: number;
  isOperational?: boolean;
  message: string;
  stack?: string;
}

export interface apiResponse {
  messsge: string;
  data?: Array<object> | object;
}

export interface requestSchema {
  params?: Joi.ObjectSchema;
  query?: Joi.ObjectSchema;
  body?: Joi.ObjectSchema;
}
