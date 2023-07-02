import { Request, Response, NextFunction } from "express";
import { APIResponse } from "../utils/formatter.js";
import BadRequest from "./BadRequest.js";

const GlobalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BadRequest) {
    return res
      .status(err.status ?? 400)
      .send(APIResponse(err.message, null, false));
  }

  console.error(err);
  let defaultErrorMessage = "Unexpected error happened. Please try again later";
  return res
    .status(500)
    .send(APIResponse(err.message ?? defaultErrorMessage, null, false));
};

export default GlobalErrorHandler;
