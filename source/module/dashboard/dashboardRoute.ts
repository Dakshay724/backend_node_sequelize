import express from "express";
import dashboardService from "./dashboardController";

const router = express.Router();

router.get("/", dashboardService.getAdminDashboard);
router.get("/customer/:userId", dashboardService.getCustomerDashboard);

export default router;
