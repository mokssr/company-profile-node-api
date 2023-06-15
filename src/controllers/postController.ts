import { Request, Response } from "express";
import { APIResponse } from "../utils/ResponseFormatter";
import PostService from "../services/postService";

const getAllPost = async (req: Request, res: Response) => {
  const post = await PostService.getAllPost();
  res.send(APIResponse(null, post));
};

const PostController = Object.freeze({
  getAllPost,
});

export default PostController;
