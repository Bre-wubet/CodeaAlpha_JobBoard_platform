import mongoose from "mongoose";

const employerSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    companyWebsite: {
        type: String
    },
    companyLogo: {
        type: String,
    },
    industry: {
        type: String,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
}, {
  timestamps: true,
});

const Employer = mongoose.model("Employer", employerSchema);

export default Employer;
