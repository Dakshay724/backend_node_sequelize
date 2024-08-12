import express from "express";
import serviceController from "./serviceController";

const router = express.Router();

router.post("/create", serviceController.createService);
router.get("/get", serviceController.getServices);
router.put("/update/:id", serviceController.updateService);
router.delete("/delete/:id", serviceController.deleteService);

export default router;
