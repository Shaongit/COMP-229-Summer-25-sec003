const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticateToken = require('../middleware/authMiddleware');

//GET all users (protected)
router.get('/', authenticateToken, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// // GET all users (now public)
// router.get('/', async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

//GET user by ID (protected)
router.get('/:id', authenticateToken, async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// // GET user by ID (now public)
// router.get('/:id', async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.json(user);
// });


// POST new user (public - sign up)
router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
});

//PUT update user by ID (protected)
router.put('/:id', authenticateToken, async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// // PUT update user by ID (now public)
// router.put('/:id', async (req, res) => {
//   const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// DELETE user by ID (protected)
router.delete('/:id', authenticateToken, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

// // DELETE user by ID (now public)
// router.delete('/:id', async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   res.json({ message: 'User deleted' });
// });

// DELETE all users (protected)
router.delete('/', authenticateToken, async (req, res) => {
  await User.deleteMany();
  res.json({ message: 'All users deleted' });
});

// // DELETE all users (now public)
// router.delete('/', async (req, res) => {
//   await User.deleteMany();
//   res.json({ message: 'All users deleted' });
// });

module.exports = router;

