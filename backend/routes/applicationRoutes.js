import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import {
  applyForJob,
  getApplicationsByJobId,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication,
} from "../controllers/applicationController.js";

const applicationRoutes = Router();

applicationRoutes.post("/", authMiddleware, roleMiddleware('candidate'), applyForJob);
applicationRoutes.get("/job/:jobId", authMiddleware, roleMiddleware('employer'), getApplicationsByJobId);
applicationRoutes.get("/:id", authMiddleware, roleMiddleware('employer'), getApplicationById);
applicationRoutes.put("/:id", authMiddleware, roleMiddleware('employer'), updateApplicationStatus);
applicationRoutes.delete("/:id", authMiddleware, roleMiddleware('employer'), deleteApplication);

export default applicationRoutes;
