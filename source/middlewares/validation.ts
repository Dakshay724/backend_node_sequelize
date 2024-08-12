"use strict";
import { NextFunction, Request, Response } from "express";
import Joi, { ValidationResult } from "joi";
import { requestSchema } from "../utils/interfaces/common";
import { pick } from "lodash";

/**
 * Middleware function to validate the request against a given schema.
 * @param {requestSchema} schema - The schema to validate the request against.
 * @returns {Function} - Middleware function that validates the request and passes it to the next middleware if valid.
 */
const validate =
  (schema: requestSchema) =>
  (request: Request, res: Response, next: NextFunction) => {
    const validSchema: requestSchema = pick(schema, [
      "params",
      "query",
      "body",
    ]);
    const object: Partial<Request> = pick(request, Object.keys(validSchema));

    const { value, error }: ValidationResult = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" } })
      .validate(object);
    if (error) {
      const { details } = error;
      const message = details
        .map((i: any) => i.message)
        .join(",")
        .replace(/"/g, "");
      return res.status(422).json({
        message,
      });
    }

    Object.assign(request, value);
    return next();
  };

export default validate;
