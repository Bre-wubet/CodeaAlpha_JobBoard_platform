import { Router } from "express";
import { getCandidate, updateCandidate, trackAppliedJobs } from "../controllers/candidateController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const candidateRoutes = Router();

candidateRoutes.get("/:id", authMiddleware, roleMiddleware('candidate'), getCandidate);
candidateRoutes.put("/:id", authMiddleware, roleMiddleware('candidate'), updateCandidate);
candidateRoutes.get("/:id/applied-jobs", authMiddleware, roleMiddleware('candidate'), trackAppliedJobs);

export default candidateRoutes;
