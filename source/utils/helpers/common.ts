"use strict";
import jwt from "jsonwebtoken";

export const createToken = async (user: any) => {
  const accessExpiration = new Date(Date.now() + 100 * 60000);

  const accessToken = jwt.sign(
    {
      id: user.id ? user.id : user.id,
      role: user.role,
    },
    process.env.JWT_SECRET || "jwt_secret",
    {
      expiresIn: `${10}hrs`,
    }
  );

  return {
    role: user.role,
    accessToken,
    accessTokenExpiresAt: accessExpiration,

    user,
  };
};
