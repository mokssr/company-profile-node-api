import { client as db } from "../db/DatabaseClient";
import { addUserInterface } from "../interfaces/userInterface";

/*
  we want to be able to authenticate user
  we want to be able to add new user
*/

const addUser = async (user: addUserInterface) => {
  const userResult = await db.user.create({
    data: {
      ...user,
    },
  });

  return userResult;
};

const findUniqueUser = async (username?: string, email?: string) => {
  let orClause: {}[] = [];

  if (username) {
    orClause.push({ username: username });
  }

  if (email) {
    orClause.push({ email: email });
  }

  const userResult = await db.user.findFirstOrThrow({
    where: {
      OR: orClause,
    },
  });

  return userResult;
};

const UserRepository = Object.freeze({
  addUser,
  findUniqueUser,
});

export default UserRepository;
