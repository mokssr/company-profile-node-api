import { client as db } from "../db/DatabaseClient";
import { createPostInterface } from "../interfaces/postInterface";

const createPost = async (post: createPostInterface, authorId: number) => {
  const author = await db.user.findFirstOrThrow({
    where: {
      id: authorId,
    },
  });

  try {
    const postResponse = await db.post.create({
      data: {
        ...post,
        author: {
          connect: { id: author.id },
        },
      },
    });

    return postResponse;
  } catch (err) {
    throw new Error("Failed saving the post");
  }
};

const getAllPost = async (limit: number = 5) => {
  const posts = await db.post.findMany({
    take: limit,
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
  });

  return posts;
};

const PostRepository = Object.freeze({
  createPost,
  getAllPost,
});

export default PostRepository;
