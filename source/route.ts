"use strict";
import { Express } from "express";
import roleRoutes from "./module/role/roleRoute";
import userRoutes from "./module/user/userRoute";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import stockRoutes from "./routes/stockRoutes";
import cartRoutes from "./routes/cartRoutes";
import orderRoutes from "./routes/orderRoutes";

export default (app: Express) => {
  app.use("/api/roles", roleRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/stocks", stockRoutes);
  app.use("/api/carts", cartRoutes);
  app.use("/api/orders", orderRoutes);
};
