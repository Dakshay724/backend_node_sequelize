"use strict";
import express from "express";
import categoryController from "./categoryController";
import validate from "../../middlewares/validation";
import categoryValidation from "./categoryValidation";

const router = express.Router();

router.post(
  "/createCategory",
  validate(categoryValidation.createCategoryValidations),
  categoryController.createCategory
);

router.put(
  "/editCategory/:id",
  validate(categoryValidation.editCategoryValidations),
  categoryController.editCategory
);

router.delete(
  "/deleteCategory/:id",
  validate(categoryValidation.deleteCategoryValidations),
  categoryController.deleteCategory
);

router.get(
  "/getCategory/:id",
  validate(categoryValidation.getCategoryValidations),

  categoryController.getCategoryById
);

router.get("/getAllCategories", categoryController.getAllCategories);

export default router;
