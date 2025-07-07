// Aggregatedata service for handling statistics-related operations
//admin service for handling admin-related operations
import Job from '../models/Job.js';
import Application from '../models/Application.js';
import User from '../models/User.js';

// Get total user count
export const getTotalUserCount = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    res.status(200).json({ totalUsers });
  } catch (error) {
    console.error("Error fetching total user count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get total job count
export const getTotalJobCount = async (req, res) => {
  try {
    const totalJobs = await Job.countDocuments();
    res.status(200).json({ totalJobs });
  } catch (error) {
    console.error("Error fetching total job count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get total application count
export const getTotalApplicationCount = async (req, res) => {
  try {
    const totalApplications = await Application.countDocuments();
    res.status(200).json({ totalApplications });
  } catch (error) {
    console.error("Error fetching total application count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
