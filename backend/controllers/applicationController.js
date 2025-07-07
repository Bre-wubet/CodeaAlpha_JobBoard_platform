import Application from "../models/Application";
import Job from "../models/Job";
import Candidate from "../models/Candidate";
import Resume from "../models/Resume";

//apply for a job
export const applyForJob = async (req, res) => {
  const { jobId, resumeId, coverLetter } = req.body;
  const candidateId = req.user._id;

  try {
    // Check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Check if the candidate exists
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // Check if the resume exists
    const resume = await Resume.findById(resumeId);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Create a new application
    const application = new Application({
      job: jobId,
      candidate: candidateId,
      resume: resumeId,
      coverLetter,
    });

    await application.save();
    res.status(201).json({ message: "Application submitted successfully", application });
  } catch (error) {
    console.error("Error applying for job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get applications by job ID
export const getApplicationsByJobId = async (req, res) => {
  const { jobId } = req.params;

  try {
    // Check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Get applications for the job
    const applications = await Application.find({ job: jobId }).populate("candidate resume");
    res.status(200).json({ applications });
  } catch (error) {
    console.error("Error fetching applications by job ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get application by ID
export const getApplicationById = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the application exists
    const application = await Application.findById(id).populate("candidate resume");
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ application });
  } catch (error) {
    console.error("Error fetching application by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update application status
export const updateApplicationStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Check if the application exists
    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    // Update the application status
    application.status = status;
    await application.save();

    res.status(200).json({ message: "Application status updated successfully", application });
  } catch (error) {
    console.error("Error updating application status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Delete application
export const deleteApplication = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the application exists
    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    // Delete the application
    await application.remove();
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    console.error("Error deleting application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
