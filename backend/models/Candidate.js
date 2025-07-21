import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  skills: [{
    type: String,
  }],
   education: [{
    degree: {
      type: String,
    },
    institution: {
      type: String,
    },
    yearOfGraduation: {
      type: Number,
    },
  }],
  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
  },

  experience: [{
    jobTitle: {
      type: String,
    },
    company: {
      type: String,
    },
    years: {
      type: Number,
    },
  }],
}, {
  timestamps: true,
});

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
