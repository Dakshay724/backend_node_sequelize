import express from "express";
import productController from "./productController";
import validate from "../../middlewares/validation";
import productValidation from "./productValidation";

const router = express.Router();

router.post(
  "/createProduct",
  validate(productValidation.createProductValidations),
  productController.createProduct
);

router.put(
  "/editProduct/:id",
  validate(productValidation.editProductValidations),
  productController.editProduct
);

router.delete(
  "/deleteProduct/:id",
  validate(productValidation.deleteProductValidations),
  productController.deleteProduct
);

router.get("/getProduct/:id", productController.getProductById);

router.get("/getAllProducts", productController.getAllProducts);

export default router;
