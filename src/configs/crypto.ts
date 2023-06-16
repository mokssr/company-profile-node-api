export const SALT_ROUND = parseInt(process.env.BCRYPT_SALT_ROUND ?? "10");

// uncomment to produce bug
// export const SALT_ROUND = process.env.BCRYPT_SALT_ROUND || 10;
