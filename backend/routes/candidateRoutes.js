import { Router } from "express";
import { getCandidate, updateCandidate, trackAppliedJobs, createCandidate } from "../controllers/candidateController.js";
import { uploadResume } from "../services/resumeService.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";

const candidateRoutes = Router();

candidateRoutes.get("/:id", authMiddleware, roleMiddleware('candidate'), getCandidate);
candidateRoutes.post("/", authMiddleware, roleMiddleware('candidate'), createCandidate);
candidateRoutes.put("/:id", authMiddleware, roleMiddleware('candidate'), updateCandidate);
candidateRoutes.post("/:id/resume", authMiddleware, roleMiddleware('candidate'), upload.single('resume'), uploadResume);
candidateRoutes.get("/:id/applied-jobs", authMiddleware, roleMiddleware('candidate'), trackAppliedJobs);

export default candidateRoutes;
