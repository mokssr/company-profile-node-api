import { NextFunction, Request, Response } from "express";
import { APIResponse } from "../utils/ResponseFormatter";
import PostService from "../services/postService";
import { validateCreatePost } from "../validations/postValidation";

const getAllPost = async (req: Request, res: Response) => {
  const post = await PostService.getAllPost();
  res.send(APIResponse(null, post));
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const { error: valError, value: post } = validateCreatePost(req.body);

  if (valError) {
    res
      .status(400)
      .send(APIResponse(valError.message, valError.details, false));
    return;
  }

  try {
    const postResult = await PostService.createPost(post, 1);
    res.status(201).send(APIResponse("Post is created", postResult));
  } catch (err) {
    next(err);
  }
};

const PostController = Object.freeze({
  createPost,
  getAllPost,
});

export default PostController;
