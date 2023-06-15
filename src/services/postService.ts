import PostRepository from "../repositories/postRepository";

const getAllPost = async (limit: number = 10) => {
  const posts = await PostRepository.getAllPost(limit);
  return posts;
};

const PostService = Object.freeze({
  getAllPost,
});

export default PostService;
