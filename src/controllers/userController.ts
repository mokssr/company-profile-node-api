import { Request, Response } from "express";
import UserService from "../services/userService";
import { validateSignUp } from "../validations/userValidation";
import { APIResponse } from "../utils/ResponseFormatter";

const addUser = async (req: Request, res: Response) => {
  let { error: valError, value } = validateSignUp(req.body);

  if (valError) {
    res
      .status(400)
      .send(APIResponse(valError.message, valError.details, false));
    return;
  }

  let { error, value: userResult } = await UserService.addUser(value);

  if (error) {
    console.error(error);
    res.status(400).send(APIResponse(error, userResult, false));
    return;
  }

  res.status(201).send(APIResponse("user created", userResult));
};

const UserController = Object.freeze({
  addUser,
});

export default UserController;
