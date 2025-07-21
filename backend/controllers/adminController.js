import User from "../models/User.js";
import Job from "../models/Job.js";
import Application from "../models/Application.js";


// Get all users and display the counts of candidates and employers
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    const candidateCount = users.filter(user => user.role === "candidate").length;
    const employerCount = users.filter(user => user.role === "employer").length;

    res.status(200).json({ candidateCount, employerCount, users });
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// admin reporting statistics and with applications to each job
export const jobStatistics = async (req, res) => {
  try {
    const totalJobs = await Job.countDocuments();
    const totalApplications = await Application.countDocuments();

    const jobsWithApplications = await Job.aggregate([
      {
        $lookup: {
          from: "applications",
          localField: "_id",
          foreignField: "job",
          as: "applications",
        },
      },
      {
        $project: {
          title: 1,
          company: 1,
          location: 1,
          applications: { $size: "$applications" },
        },
      },
    ]);

    res.status(200).json({
      totalJobs,
      totalApplications,
      jobsWithApplications,
    });
  } catch (error) {
    console.error("Error fetching job statistics:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update user role
export const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { role }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};