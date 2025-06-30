// const express = require('express');
// const router = express.Router();
// const Project = require('../models/Project');
// const authenticateToken = require('../middleware/authMiddleware');

// // GET all projects
// router.get('/', authenticateToken, async (req, res) => {
//   const projects = await Project.find();
//   res.json(projects);
// });

// // GET project by ID
// router.get('/:id', authenticateToken, async (req, res) => {
//   const project = await Project.findById(req.params.id);
//   res.json(project);
// });

// // POST new project
// router.post('/', authenticateToken, async (req, res) => {
//   const newProject = new Project(req.body);
//   await newProject.save();
//   res.status(201).json(newProject);
// });

// // PUT update project by ID
// router.put('/:id', authenticateToken, async (req, res) => {
//   const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updated);
// });

// // DELETE project by ID
// router.delete('/:id', authenticateToken, async (req, res) => {
//   await Project.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Project deleted' });
// });

// // DELETE all projects
// router.delete('/', authenticateToken, async (req, res) => {
//   await Project.deleteMany();
//   res.json({ message: 'All projects deleted' });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects (public)
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// GET project by ID (public)
router.get('/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
});

// POST new project (public)
router.post('/', async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.status(201).json(newProject);
});

// PUT update project by ID (public)
router.put('/:id', async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE project by ID (public)
router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
});

// DELETE all projects (public)
router.delete('/', async (req, res) => {
  await Project.deleteMany();
  res.json({ message: 'All projects deleted' });
});

module.exports = router;
