"use strict";
import express from "express";
import appointmentController from "./appointmentController";

const router = express.Router();

router.post("/create", appointmentController.bookAppointment);
router.get("/get", appointmentController.getAppointments);

export default router;
