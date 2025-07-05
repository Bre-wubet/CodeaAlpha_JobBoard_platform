import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true,
    },
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume",
        required: true,
    },
    coverLetter: {
        type: String,
    },
    status: {
        type: String,
        enum: ["applied", "interviewing", "offered", "rejected"],
        default: "applied",
    },
    appliedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
// This code defines a Mongoose schema for an Application model in a job application system.