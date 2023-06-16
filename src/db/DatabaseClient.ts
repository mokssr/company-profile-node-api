import { PrismaClient, User } from "@prisma/client";

export const client = new PrismaClient();

export const excludePassword = (user: User | User[]) => {
  if (!Array.isArray(user)) {
    return exclude(user, ["password"]);
  }

  const excluded: any[] = [];
  user.forEach((u) => {
    excluded.push(exclude(u, ["password"]));
  });
  return excluded;
};

// Exclude keys from user
function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): Omit<User, Key> {
  for (let key of keys) {
    delete user[key];
  }
  return user;
}
