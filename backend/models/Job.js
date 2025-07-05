import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    requirements: {
        type: [String],
        required: true,
    },
    company: {
        type: String,
    },
    location: {
        type: String,
    },
    salaryRange: {
        type: {
            min: {
                type: Number,
                required: true,
            },
            max: {
                type: Number,
                required: true,
            },
        },
    },
    tags: {
        type: [String],
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employer",
        required: true,
    },
}, {
    timestamps: true,
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
// This code defines a Mongoose schema and model for a Job entity in a job portal application.