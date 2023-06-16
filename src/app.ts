import express from "express";
import indexRouter from "./routes/indexRoutes";
import GlobalErrorHandler from "./exceptions/DefaultHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", indexRouter);

app.get("/", async (req, res) => {
  res.send("hello world");
});

app.use(GlobalErrorHandler);

export { app };
