const jwt = require("jsonwebtoken");

const data = {
  iat: 110102919,
  id: 1,
  role: "admin",
};

let signed = jwt.sign(data, "secret", { subject: "subject" });
let alter = jwt.sign(data, "asd");

const [a, b, c] = signed.split(".");
try {
  console.log(
    jwt.verify(signed, "secret", { complete: true, subject: "subject" })
  );
} catch (err) {
  if (err instanceof jwt.JsonWebTokenError) {
    console.log(err.name);
    console.log(err.message);
  }
}
