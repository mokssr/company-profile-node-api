import { NextFunction, Request, Response } from "express";
import UserService from "../services/userService";
import { validateSignUp } from "../validations/userValidation";
import { APIResponse } from "../utils/formatter";
import BadRequest from "../exceptions/BadRequest";

const addUser = (req: Request, res: Response, next: NextFunction) => {
  let { error: valError, value } = validateSignUp(req.body);

  if (valError) {
    res
      .status(400)
      .send(APIResponse(valError.message, valError.details, false));
    return;
  }

  UserService.addUser(value)
    .then((value) => {
      res.status(201).send(APIResponse("user created", value));
    })
    .catch((err) => {
      next(err);
    });
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const take = parseInt((req.query.take as string) ?? "10");
    const skip = parseInt((req.query.skip as string) ?? "0");
    const userList = await UserService.getAllUsers(take, skip);

    res.send(APIResponse(null, userList));
  } catch (err) {
    next(err);
  }
};

const UserController = Object.freeze({
  addUser,
  getAllUsers,
});

export default UserController;
