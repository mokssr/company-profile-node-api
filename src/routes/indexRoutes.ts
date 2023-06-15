import express, { Request, Response } from "express";
import postRouter from "./postRoutes";
import userRouter from "./userRoutes";

const indexRouter = express.Router();

indexRouter.use("/post", postRouter);
indexRouter.use("/user", userRouter);

export default indexRouter;
