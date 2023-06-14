import express from "express";
import { router as apiRouter } from "./routes/indexRoutes.js";

const app = express();

app.use("/api", apiRouter);

app.get("/", async (req, res) => {
  res.send("hello world");
});

export { app };
