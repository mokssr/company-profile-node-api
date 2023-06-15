import express from "express";
import indexRouter from "./routes/indexRoutes";
import GlobalErrorHandler from "./exceptions/DefaultHandler";

const app = express();

app.use(express.json());

app.use("/api", indexRouter);

app.get("/", async (req, res) => {
  res.send("hello world");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export { app };
