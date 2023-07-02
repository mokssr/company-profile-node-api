/* 
  
  functionality:
    - sign/generate token
    - verify token
    - refresh token

  verify return true if:
    - verify token validity
    - verify token is not expired
    - verify token is not blacklisted

*/

import { readFileSync } from "fs";
import jwt from "jsonwebtoken";

const KEY_FILE = process.env.KEY_FILE ?? "key.txt";

const sign = (payload: any) => {
  try {
    const secret = _readKeyFile();
    return jwt.sign(payload, secret);
  } catch (err) {
    throw new Error("Failed generating token");
  }
};

const verify = (token: string) => {
  try {
    const secret = _readKeyFile();
    return jwt.verify(token, secret);
  } catch (err) {
    console.log(err);
    return null;
  }
};

const _readKeyFile = () => {
  try {
    const key = readFileSync(KEY_FILE);
    return key;
  } catch (err) {
    throw new Error("Failed loading key file");
  }
};

export const AuthUtils = Object.freeze({
  sign,
  verify,
});
