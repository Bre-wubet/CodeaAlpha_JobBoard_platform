import { Router } from "express";
import { getEmployer, updateEmployer, getJobsByEmployer } from "../controllers/employerController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware";
const employerRoutes = Router();

employerRoutes.get("/:id", authMiddleware, roleMiddleware('employer'), getEmployer);
employerRoutes.put("/:id", authMiddleware, roleMiddleware('employer'), updateEmployer());
//get jobs by current employer
employerRoutes.get("/:id/jobs", authMiddleware, roleMiddleware('employer'), getJobsByEmployer);

export default employerRoutes;
