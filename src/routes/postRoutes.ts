import express from "express";
import PostController from "../controllers/postController";

const postRouter = express.Router();

// get all route
postRouter.get("/", PostController.getAllPost);
postRouter.post("/", PostController.createPost);

export default postRouter;
