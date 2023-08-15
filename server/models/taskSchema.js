import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  name: { type: String, require: true },
  completed: { type: Boolean, default: false },
  priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "medium",
  },
});

const Task = new mongoose.model("Task", taskSchema);

export default Task;
