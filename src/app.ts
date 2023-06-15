import express from "express";
import indexRouter from "./routes/indexRoutes";

const app = express();

app.use(express.json());

app.use("/api", indexRouter);

app.get("/", async (req, res) => {
  res.send("hello world");
});

export { app };
