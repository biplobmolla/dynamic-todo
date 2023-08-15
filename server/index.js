import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import taskRouter from "./routes/taskRoute.js";
import userRouter from "./routes/userRoute.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => console.log("Database is Connected"))
  .catch(() => console.log("There is a problem"));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(8000, () =>
  console.log("server is running at http://localhost:8000/")
);
