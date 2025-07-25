import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import {
  applyForJob,
  getApplicationsByJobId,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/applicationController.js";
import upload from "../middlewares/uploadMiddleware.js";

const applicationRoutes = Router();

applicationRoutes.post("/", authMiddleware, roleMiddleware('candidate'), upload.single('resume'), applyForJob);
applicationRoutes.get("/job/:jobId", authMiddleware, roleMiddleware('employer'), getApplicationsByJobId);
applicationRoutes.get("/:id", authMiddleware, roleMiddleware('employer'), getApplicationById);
applicationRoutes.put("/:id", authMiddleware, roleMiddleware('employer'), updateApplicationStatus);
applicationRoutes.delete("/:id", authMiddleware, roleMiddleware('employer'), deleteApplication);

export default applicationRoutes;
