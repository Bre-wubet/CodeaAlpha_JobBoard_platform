import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  skills: [{
    type: String,
    required: true,
  }],
   education: [{
    degree: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    yearOfGraduation: {
      type: Number,
      required: true,
    },
  }],
  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
    required: true,
  },

  experience: [{
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    years: {
      type: Number,
      required: true,
    },
  }],
}, {
  timestamps: true,
});

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
