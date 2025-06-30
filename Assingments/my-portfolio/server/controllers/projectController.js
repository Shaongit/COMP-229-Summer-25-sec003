const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
};

exports.createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(project);
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Project deleted' });
};

exports.deleteAllProjects = async (req, res) => {
  await Project.deleteMany({});
  res.json({ message: 'All projects deleted' });
};
