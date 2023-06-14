import { Request, Response } from "express";
import { APIResponse } from "../utils/ResponseFormatter";
import { findAllPosts } from "../services/postService";

const getAllPost = (req: Request, res: Response) => {
  const post = findAllPosts(0, 5);

  res.send(APIResponse(null, post));
};

const PostController = Object.freeze({
  getAllPost,
});

export default PostController;
