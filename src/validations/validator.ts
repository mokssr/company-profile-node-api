import Joi from "joi";

const validator = (schema: Joi.Schema) => (payload: any) => {
  return schema.validate(payload, {
    abortEarly: false,
  });
};

export default validator;
