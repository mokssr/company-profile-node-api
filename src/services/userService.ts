import bcrypt from "bcrypt";
import { addUserInterface } from "../interfaces/userInterface";
import UserRepository from "../repositories/userRepository";

import { SALT_ROUND } from "../configs/crypto";
import BadRequest from "../exceptions/BadRequest";
import { excludePassword } from "../db/DatabaseClient";

const addUser = async (user: addUserInterface) => {
  // check if email or username is used
  let isUserExist = await UserRepository.findUniqueUser(
    user.username,
    user.email
  );
  if (isUserExist) {
    throw new BadRequest("username or email already taken");
  }

  try {
    var hashedPassword = await bcrypt.hash(user.password, SALT_ROUND);
  } catch (err) {
    throw new Error("error hashing password");
  }

  const userCandidate = {
    ...user,
    password: hashedPassword,
  };

  const userResult = await UserRepository.addUser(userCandidate);

  return userResult;
};

const getAllUsers = async (take: number = 10, skip: number = 0) => {
  const userList = await UserRepository.getAllUsers(take, skip);
  const userWithoutPassword = excludePassword(userList);

  return userWithoutPassword;
};
const UserService = Object.freeze({
  addUser,
  getAllUsers,
});

export default UserService;
