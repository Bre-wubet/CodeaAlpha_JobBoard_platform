import router from 'express';
import { registerUser, loginUser, getMe } from '../controllers/authControllers.js';
import {authMiddleware} from '../middlewares/authMiddleware.js';

const authRoutes = router();

authRoutes.post('/register', registerUser);
authRoutes.post('/login', loginUser);
authRoutes.get('/me', authMiddleware, getMe);

export default authRoutes;