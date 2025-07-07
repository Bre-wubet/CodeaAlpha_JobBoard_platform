import { Router } from "express";
import { getEmployer, updateEmployer, getJobsByEmployer, createEmployer } from "../controllers/employerController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
const employerRoutes = Router();

employerRoutes.get("/:id", authMiddleware, roleMiddleware('employer'), getEmployer);
employerRoutes.put("/:id", authMiddleware, roleMiddleware('employer'), updateEmployer);
employerRoutes.post("/", authMiddleware, roleMiddleware('employer'), createEmployer);
//get jobs by current employer
employerRoutes.get("/:id/jobs", authMiddleware, roleMiddleware('employer'), getJobsByEmployer);

export default employerRoutes;
