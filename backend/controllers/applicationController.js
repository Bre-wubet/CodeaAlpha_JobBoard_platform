import Application from "../models/Application.js";
import Job from "../models/Job.js";
import Candidate from "../models/Candidate.js";
import Resume from "../models/Resume.js";

import { sendEmail } from "../services/emailService.js";
import Employer from "../models/Employer.js";
import User from "../models/User.js";

//apply for a job with attached resume and associated candidate with assigning to the job
export const applyForJob = async (req, res) => {
  const { jobId, candidateId, resumeId, coverLetter } = req.body;

  try {
    // Validate job
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Validate candidate
    const candidate = await Candidate.findById(candidateId).populate("userId");
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }

    // Validate resume
    const resume = await Resume.findById(resumeId);
    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Create application using correct field names
    const application = new Application({
      jobId,
      candidateId,
      resumeId,
      coverLetter,
    });

    await application.save();

    // Notify employer
    const employer = await Employer.findById(job.postedBy._id).populate('userId');
    const employerEmail = employer.userId.email;

    await sendEmail({
    to: employerEmail,
    subject: `New Application for ${job.title}`,
    html: `<p>A new candidate has applied to your job: <strong>${job.title}</strong>.</p>`
  });

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
    const applications = await Application.find({ jobId }).populate({
        path: "candidateId",
        populate: { path: "userId" }, // deeply populate candidate's user
      })
      .populate("resumeId")
      .populate("jobId");
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
    const application = await Application.findById(id).populate({
        path: "candidateId",
        populate: { path: "userId" }, // deeply populate candidate's user
      })
      .populate("resumeId")
      .populate("jobId");
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ application });
  } catch (error) {
    console.error("Error fetching application by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update application status by the employer for the application associated with his job
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
