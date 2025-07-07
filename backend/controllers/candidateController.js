import Candidate from '../models/Candidate.js';
import Job from '../models/Job.js';

// Get candidate details
export const getCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update candidate details
export const updateCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.status(200).json(candidate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload resume
export const uploadResume = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    // Handle file upload logic here
    
    res.status(200).json({ message: 'Resume uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Track applied jobs
export const trackAppliedJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ applicants: req.params.id });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Additional functions can be added here as needed, such as:
// - getAppliedJobs: to retrieve jobs a candidate has applied to