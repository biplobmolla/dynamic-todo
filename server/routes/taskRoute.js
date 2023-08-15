import express from "express";
import Task from "../models/taskSchema.js";

const taskRouter = express.Router();

taskRouter.post("/create", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const result = await newTask.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

taskRouter.put("/update/:id", async (req, res) => {
  try {
    const result = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

taskRouter.delete("/delete/:id", async (req, res) => {
  try {
    const result = await Task.deleteOne({ _id: req.params.id });
    res.send("Task is deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

taskRouter.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default taskRouter;
