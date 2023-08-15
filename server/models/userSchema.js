import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  session: { type: String, default: undefined },
});

const User = mongoose.model("User", userSchema);

export default User;
