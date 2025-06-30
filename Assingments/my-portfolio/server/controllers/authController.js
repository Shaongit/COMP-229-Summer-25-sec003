const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'User registration failed' });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {

    //debugger;
    console.log('Login attempt with email:', email);

    // Print the User model's propertise and vlues
    //console.log('User model:', User.email, User.password);
    console.log(User); // Example ID, replace with a valid one
    const user = await User.findOne({ email });

    console.log('User found:', user);


    if (!user) return res.status(401).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// Logout (optional client-side handled, can be dummy)
exports.logout = (req, res) => {
  res.json({ message: 'Logout successful' });
};