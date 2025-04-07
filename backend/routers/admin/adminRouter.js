import { Router } from 'express';
import UserController from '../../controllers/userController.js';

const adminRouter = Router();

adminRouter.post('/register', UserController.registerAdmin);
// adminRouter.post('/forgot-password', UserController.forgotPassword);

export default adminRouter;
