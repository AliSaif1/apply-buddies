import { Router } from 'express';
import videoRouter from './video/videoRouters.js';
import universityRouter from './university/universityRouter.js';
import scholarshipRouter from './scholarship/scholarshipRouter.js';
import programRouter from './program/programRouter.js';
import countryRouter from './country/countryRouter.js';

const contentRouter = Router();

contentRouter.use('/video', videoRouter);
contentRouter.use('/scholarship', scholarshipRouter);
contentRouter.use('/university', universityRouter);
contentRouter.use('/program', programRouter);
contentRouter.use('/country', countryRouter);


export default contentRouter;
