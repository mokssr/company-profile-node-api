import { client as db } from "../db/DatabaseClient";
import { Post } from "../interfaces/postInterface";

const createPost = async (post: Post, authorId: number) => {
  const author = await db.user.findFirstOrThrow({
    where: {
      id: authorId,
    },
  });

  const postCandidate = {
    ...post,
  };

  const postResponse = await db.post.create({
    data: {
      ...postCandidate,
      author: {
        connect: { id: author.id },
      },
    },
  });

  return postResponse;
};

const getAllPost = async (limit: number = 5) => {
  const posts = await db.post.findMany({
    take: limit,
  });

  return posts;
};

const PostRepository = Object.freeze({
  createPost,
  getAllPost,
});

export default PostRepository;
