const User = require('../models/User');

// GET all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// GET user by ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// POST new user
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

// PUT update user by ID
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

// DELETE user by ID
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};

// DELETE all users
exports.deleteAllUsers = async (req, res) => {
  await User.deleteMany({});
  res.json({ message: 'All users deleted' });
};
