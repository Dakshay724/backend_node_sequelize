import Joi from "joi";
const createRoleValidations = {
  body: Joi.object().keys({
    name: Joi.string().required().messages({
      "any.required": "name is required.",
      "string.empty": "name cannot be empty.",
    }),
    description: Joi.string().allow("").optional().messages({
      "string.empty": "Short description cannot be empty.",
    }),
  }),
};

export default { createRoleValidations };
