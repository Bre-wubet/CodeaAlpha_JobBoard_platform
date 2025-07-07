import express from 'express';
import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import {roleMiddleware} from '../middlewares/roleMiddleware.js';

import {
  publicJobSearch,
  getJobDetails,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobControllers.js';

const jobRoutes = Router();

//typical end points
jobRoutes.get('/', publicJobSearch);
jobRoutes.get('/:id', getJobDetails);
jobRoutes.post('/', authMiddleware, roleMiddleware('employer'), createJob);
jobRoutes.put('/:id', authMiddleware, roleMiddleware('employer'), updateJob);
jobRoutes.delete('/:id', authMiddleware, roleMiddleware('employer'), deleteJob);

export default jobRoutes;