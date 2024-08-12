"use strict";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import {} from "../utils/helpers/constant";
import createResponse from "../utils/helpers/response";
import status from "../utils/helpers/status.json";
import User from "../models/user";

/**
 * Middleware function for authentication and authorization.
 * @param {string} userRole - The role of the user to be authenticated.
 * @param {Request} request - The HTTP request object.
 * @param {Response} response - The HTTP response object.
 * @param {Function} next - The next function to be called in the middleware chain.
 * @returns None
 */
const auth =
  (userRole: any) =>
  async (request: Request, response: Response, next: any) => {
    const token = request.header("Authorization") as string;
    // if (userRole.includes(ROLES.GUEST)) {
    //   (request as any)["user"] = ROLES.GUEST;

    //   return next();
    // }
    try {
      //   if (!token) {
      //     return createResponse(
      //       response,
      //       status.UNAUTHORIZED,
      //       (request as any).t("auth.NOT_TOKEN")
      //     );
      //   }
      //   jwt.verify(
      //     token,
      //     config.jwt.secret,
      //     async function (error: any, verified: any) {
      //       if (error) {
      //         if (error.message == "jwt expired") {
      //           return createResponse(
      //             response,
      //             status.UNAUTHORIZED,
      //             (request as any).t("auth.TOKEN_EXPIRED")
      //           );
      //         }
      //         return createResponse(response, status.GONE, error.message);
      //       }
      //       (request as any)["user"] = verified;
      //       const role = (request as any).user.role;
      //       const id = (request as any).user.id;
      //       const user: any = await User.findById(id);
      //       if (!user) {
      //         return createResponse(
      //           response,
      //           status.NOT_FOUND,
      //           (request as any).t("auth.USER_NOT_FOUND")
      //         );
      //       }
      //       if (userRole.includes(ROLES.ALL)) {
      //         if (user?.status !== STATUS.DELETED) {
      //           (request as any)["user"] = user;
      //           return next();
      //         }
      //       } else {
      //         if (userRole.includes(role)) {
      //           if (user?.status === STATUS.DEACTIVE) {
      //             return createResponse(
      //               response,
      //               status.FORBIDDEN,
      //               (request as any).t("auth.DEACTIVE_ACCOUNT")
      //             );
      //           }
      //           if (user?.status === STATUS.DELETED) {
      //             return createResponse(
      //               response,
      //               status.GONE,
      //               (request as any).t("auth.ACCOUNT_DELETED")
      //             );
      //           }
      //           (request as any)["user"] = user;
      //           return next();
      //         } else {
      //           return createResponse(
      //             response,
      //             status.FORBIDDEN,
      //             (request as any).t("auth.UNAUTHORIZED")
      //           );
      //         }
      //       }
      //     }
      //   );
    } catch (error: any) {
      return createResponse(response, error.status, error.message);
    }
  };

export default auth;
