import { Request, Response, NextFunction } from "express";
import { APIResponse } from "../utils/ResponseFormatter.js";

const GlobalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errMessage = "Unexpected error happened. Please try again later";
  console.error(err.stack);

  return res.status(500).send(APIResponse(errMessage, null, false));
};

export default GlobalErrorHandler;
