import j from "joi";
import validator from "./validator";

const createPostSchema = j.object({
  // title, content, isPublished
  title: j.string().required().min(3).max(50),
  content: j.string().required().min(3),
  isPublished: j.boolean().optional().default(false),
});

export const validateCreatePost = validator(createPostSchema);
