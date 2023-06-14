const findAllPosts = (skip: number = 0, take: number = 10) => {
  let post: object[] = [];
  console.log(`take => ${take}`);
  for (let i = 1; i <= take; i++) {
    post.push({
      title: `title ${i}`,
      content: "lorem ipsum",
    });
  }
  return post;
};

export { findAllPosts };
