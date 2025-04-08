import { Router } from 'express';
import VideoController from '../../../controllers/videoController.js';
import UniversityController from '../../../controllers/universityController.js';
import verifyToken from '../../../middleware/verifyToken.js';

const contentRouter = Router();

contentRouter.post('/uploadVideo', verifyToken, VideoController.uploadVideo);
contentRouter.post('/addUniversity', verifyToken, UniversityController.addUniversity);

export default contentRouter;
