import j from "joi";
import validator from "./validator";

const createUserSchema = j.object({
  username: j.string().required().min(3).max(50),
  email: j.string().email().required(),
  password: j.string().min(8).max(50).required(),
});

const validateSignUp = validator(createUserSchema);

export { validateSignUp };
