const Qualification = require('../models/Qualification');

exports.getAllQualifications = async (req, res) => {
  const qualifications = await Qualification.find();
  res.json(qualifications);
};

exports.getQualificationById = async (req, res) => {
  const qualification = await Qualification.findById(req.params.id);
  res.json(qualification);
};

exports.createQualification = async (req, res) => {
  const qualification = new Qualification(req.body);
  await qualification.save();
  res.status(201).json(qualification);
};

exports.updateQualification = async (req, res) => {
  const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(qualification);
};

exports.deleteQualification = async (req, res) => {
  await Qualification.findByIdAndDelete(req.params.id);
  res.json({ message: 'Qualification deleted' });
};

exports.deleteAllQualifications = async (req, res) => {
  await Qualification.deleteMany({});
  res.json({ message: 'All qualifications deleted' });
};
