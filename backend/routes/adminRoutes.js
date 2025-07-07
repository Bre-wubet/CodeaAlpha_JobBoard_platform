import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";
import {
  getAllUsers,
  getUserById,
  jobStatistics,
  updateUserRole,
  deleteUser,
} from "../controllers/adminController";
const router = Router();

// Admin routes
router.get("/users", authMiddleware, roleMiddleware("admin"), getAllUsers);
router.get("/users/:id", authMiddleware, roleMiddleware("admin"), getUserById);
router.get("/jobs/statistics", authMiddleware, roleMiddleware("admin"), jobStatistics);
router.put("/users/:id/role", authMiddleware, roleMiddleware("admin"), updateUserRole);
router.delete("/users/:id", authMiddleware, roleMiddleware("admin"), deleteUser);

export default router;