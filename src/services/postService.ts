import PostRepository from "../repositories/postRepository";
import { createPostInterface } from "../interfaces/postInterface";
import UserRepository from "../repositories/userRepository";
import BadRequest from "../exceptions/BadRequest";

const getAllPost = async (limit: number = 10) => {
  const posts = await PostRepository.getAllPost(limit);
  return posts;
};

const createPost = async (post: createPostInterface, authorId: number) => {
  // find author details, validate if user can add post
  // if user is innactive, post will not be created
  const author = await UserRepository.findUserById(authorId);
  if (!author.isActive) {
    throw new BadRequest("Can not create post for innactive user", 400);
  }

  // save post and return to controller
  const postResult = await PostRepository.createPost(post, author.id);

  return postResult;
};

const PostService = Object.freeze({
  getAllPost,
  createPost,
});

export default PostService;
