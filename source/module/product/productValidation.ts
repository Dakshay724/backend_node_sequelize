import Joi from "joi";

const createProductValidations = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      "any.required": "Name is required.",
      "string.empty": "Name cannot be empty.",
    }),
    description: Joi.string().required().messages({
      "any.required": "Description is required.",
      "string.empty": "Description cannot be empty.",
    }),
    images: Joi.array().items(Joi.string()).min(1).max(5).required().messages({
      "any.required": "At least one image is required.",
      "array.min": "At least one image is required.",
      "array.max": "You can upload a maximum of 5 images.",
    }),
    categoryId: Joi.number().required().messages({
      "any.required": "Category ID is required.",
    }),
  }),
};

const editProductValidations = {
  body: Joi.object().keys({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    images: Joi.array().items(Joi.string()).min(1).max(5).optional(),
    categoryId: Joi.number().optional(),
  }),
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      "any.required": "ID is required.",
    }),
  }),
};

const deleteProductValidations = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      "any.required": "ID is required.",
    }),
  }),
};

export default {
  createProductValidations,
  editProductValidations,
  deleteProductValidations,
};
