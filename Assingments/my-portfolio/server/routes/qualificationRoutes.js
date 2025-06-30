// const express = require('express');
// const router = express.Router();
// const Qualification = require('../models/Qualification');
// const authenticateToken = require('../middleware/authMiddleware');

// // GET all qualifications
// router.get('/', authenticateToken, async (req, res) => {
//   const qualifications = await Qualification.find();
//   res.json(qualifications);
// });

// // GET qualification by ID
// router.get('/:id', authenticateToken, async (req, res) => {
//   const qualification = await Qualification.findById(req.params.id);
//   res.json(qualification);
// });

// // POST new qualification
// router.post('/', authenticateToken, async (req, res) => {
//   const newQualification = new Qualification(req.body);
//   await newQualification.save();
//   res.status(201).json(newQualification);
// });

// // PUT update qualification by ID
// router.put('/:id', authenticateToken, async (req, res) => {
//   const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// // DELETE qualification by ID
// router.delete('/:id', authenticateToken, async (req, res) => {
//   await Qualification.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Qualification deleted' });
// });

// // DELETE all qualifications
// router.delete('/', authenticateToken, async (req, res) => {
//   await Qualification.deleteMany();
//   res.json({ message: 'All qualifications deleted' });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Qualification = require('../models/Qualification');

// GET all qualifications (public)
router.get('/', async (req, res) => {
  const qualifications = await Qualification.find();
  res.json(qualifications);
});

// GET qualification by ID (public)
router.get('/:id', async (req, res) => {
  const qualification = await Qualification.findById(req.params.id);
  res.json(qualification);
});

// POST new qualification (public)
router.post('/', async (req, res) => {
  const newQualification = new Qualification(req.body);
  await newQualification.save();
  res.status(201).json(newQualification);
});

// PUT update qualification by ID (public)
router.put('/:id', async (req, res) => {
  const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE qualification by ID (public)
router.delete('/:id', async (req, res) => {
  await Qualification.findByIdAndDelete(req.params.id);
  res.json({ message: 'Qualification deleted' });
});

// DELETE all qualifications (public)
router.delete('/', async (req, res) => {
  await Qualification.deleteMany();
  res.json({ message: 'All qualifications deleted' });
});

module.exports = router;
