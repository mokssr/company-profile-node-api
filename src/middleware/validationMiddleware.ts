import Joi from "joi";
import { NextFunction, Request, Response } from "express";
import BadRequest from "../exceptions/BadRequest";

export interface validatedRequest extends Request {
  validated?: any;
}

export const validateMiddleware =
  (schema: Joi.Schema) =>
  (req: validatedRequest, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) return next(new BadRequest(error.message));

    req.validated = value;
    next();
  };
