import { Router } from 'express';
import authRouter from "./auth/authRouter.js";
import contentRouter from "./content/contentRouter.js";

const adminRouter = Router();
adminRouter.use('/auth', authRouter);
adminRouter.use('/content', contentRouter);

export default adminRouter;
