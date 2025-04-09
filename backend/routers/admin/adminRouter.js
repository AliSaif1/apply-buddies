import { Router } from 'express';
import authRouter from "./auth/authRouter.js";
import contentRouter from "./content/contentRouter.js";
import audienceDataRouter from './audience/audienceRouter.js';

const adminRouter = Router();
adminRouter.use('/auth', authRouter);
adminRouter.use('/content', contentRouter);
adminRouter.use('/users', audienceDataRouter);

export default adminRouter;
