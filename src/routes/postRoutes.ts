import express from "express";
import PostController from "../controllers/postController";

const postRouter = express.Router();

// get all route
postRouter.get("/", PostController.getAllPost);

export default postRouter;
