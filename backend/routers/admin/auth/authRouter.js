import { Router } from 'express';
import authController from '../../../controllers/adminControllers/authController.js';

const authRouter = Router();

authRouter.post('/register', authController.registerAdmin);
authRouter.post('/login', authController.adminLogin);
authRouter.post('/forgot-password', authController.forgotPassword);
authRouter.post('/verify-otp', authController.verifyOTP);

export default authRouter;
