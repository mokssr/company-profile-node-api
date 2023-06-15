import { APIResponse } from "../utils/ResponseFormatter.js";

const DefaultHandler = (err, req, res, next) => {
  let errMessage = "Unexpected error happened. Please try again later";
  console.error();
  err.stack;

  res.send(APIResponse(errMessage, null, false, 500));
};

export { DefaultHandler };
