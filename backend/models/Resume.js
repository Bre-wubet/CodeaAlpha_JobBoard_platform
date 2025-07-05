import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidate",
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    },
    originalName: [{
        type: String,
    }],
    uploadDate: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
