import express, { Request, Response } from "express";
import postRouter from "./postRoutes";

const indexRouter = express.Router();

indexRouter.use("/post", postRouter);

export default indexRouter;
