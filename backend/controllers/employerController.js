import Employer from '../models/Employer.js';
import Job from '../models/Job.js';


// Create a new employer
export const createEmployer = async (req, res) => {
  const newEmployer = new Employer(req.body);
  try {
    const savedEmployer = await newEmployer.save();
    res.status(201).json(savedEmployer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employer details
export const getEmployer = async (req, res) => {
  try {
    const employer = await Employer.findById({ _id: req.params.id });
    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }
    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update employer details
export const updateEmployer = async (req, res) => {
  try {
    const employer = await Employer.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!employer) {
      return res.status(404).json({ message: 'Employer not found' });
    }
    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get jobs by employer
export const getJobsByEmployer = async (req, res) => {
  try {
    const jobs = await Job.find({ employer: req.params.id });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
