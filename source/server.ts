"use strict";
import cors from "cors";
import express, { Request, Response, Express } from "express";
import routes from "./route";
import sequelize from "./utils/config/database";

const app: Express = express();
app.set("strict routing", true);
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "api working fine " });
});
routes(app);
app.use(express.json());
const port = process.env.PORT || 4000;
process.on("warning", (e) => console.warn(e.stack));

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
sequelize
  .sync()
  .then(() => {})
  .catch(() => {
    console.error(`server listening on ${port}`);
  });
