import express from "express";
import UserController from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/", UserController.addUser);

export default userRouter;
