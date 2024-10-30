import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "User already exist" });
    }

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ details: [user] });
  } catch (error) {
    res.send(error);
  }
};
