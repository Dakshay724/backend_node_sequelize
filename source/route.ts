"use strict";
import { Express } from "express";
import roleRoute from "./module/role/roleRoute";
import userRoute from "./module/user/userRoute";
import dashboardRoute from "./module/dashboard/dashboardRoute";
import serviceRoute from "./module/service/serviceRoute";
import appointmentRoute from "./module/appointment/appointmentRoute";

export default (app: Express) => {
  app.use("/role", roleRoute);
  app.use("/user", userRoute);
  app.use("/dashboard", dashboardRoute);
  app.use("/service", serviceRoute);
  app.use("/appointment", appointmentRoute);
};
