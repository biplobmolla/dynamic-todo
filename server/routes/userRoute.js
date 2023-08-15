import express from "express";

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting user" });
  }
});

userRouter.post("/create", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});

userRouter.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
  }
});

userRouter.post("/authenticate", async (req, res) => {
  try {
    const result = await User.findOne({ session: req.body.session });
    if (result) {
      res.json(result);
    } else {
      res.send(false);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default userRouter;
