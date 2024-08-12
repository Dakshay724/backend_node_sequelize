import express from "express";
import roleController from "./roleController"; // Adjust the import path as needed

const router = express.Router();

// Create a new role
router.post("/createRole", roleController.createRole);

// Retrieve all roles
router.get("/getRole", roleController.getRole);

// Update a role by ID
router.put("/editRole/:id", roleController.editRole);

// Delete a role by ID
router.delete("/deleteRole/:id", roleController.deleteRole);

export default router;
