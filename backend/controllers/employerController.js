import Employer from '../models/Employer.js';
import Job from '../models/Job.js';

// Get employer details
export const getEmployer = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
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
    const employer = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
