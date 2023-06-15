import bcrypt from "bcrypt";
import { addUserInterface } from "../interfaces/userInterface";
import UserRepository from "../repositories/userRepository";

import { SALT_ROUND } from "../configs/crypto";

const addUser = async (user: addUserInterface) => {
  // check if email or username is used
  let isUserExist = await UserRepository.findUniqueUser(
    user.username,
    user.email
  );
  if (isUserExist) {
    return { error: "user exist", value: null };
  }

  try {
    var hashedPassword = await bcrypt.hash(user.password, SALT_ROUND);
    console.log(`hashing password`);
    console.log(`password before => ${user.password}`);
    console.log(`password after  => ${hashedPassword}`);
  } catch (err) {
    console.error(err);
    throw new Error("error hashing password");
  }

  const userCandidate = {
    ...user,
    password: hashedPassword,
  };

  const userResult = await UserRepository.addUser(userCandidate);

  return { error: null, value: userResult };
};

const UserService = Object.freeze({
  addUser,
});

export default UserService;
