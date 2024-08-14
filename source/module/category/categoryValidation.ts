import Joi from "joi";

const createCategoryValidations = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      "any.required": "Name is required.",
      "string.empty": "Name cannot be empty.",
    }),
  }),
};

const editCategoryValidations = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      "any.required": "Name is required.",
      "string.empty": "Name cannot be empty.",
    }),
  }),
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      "any.required": "ID is required.",
    }),
  }),
};

const deleteCategoryValidations = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      "any.required": "ID is required.",
    }),
  }),
};
const getCategoryValidations = {
  params: Joi.object().keys({
    id: Joi.number().required().messages({
      "any.required": "ID is required.",
    }),
  }),
};

export default {
  createCategoryValidations,
  editCategoryValidations,
  deleteCategoryValidations,
  getCategoryValidations,
};
