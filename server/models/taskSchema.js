import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  name: { type: String, require: true },
  completed: { type: Boolean, default: false },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "low",
  },
  status: {
    type: String,
    enum: ["completed", "pending", "not_started"],
    default: "not_started",
  },
});

const Task = new mongoose.model("Task", taskSchema);

export default Task;
