import { Router } from "express";
import VideoController from "../../../../controllers/adminControllers/videoController.js";
import verifyToken from "../../../../middleware/verifyToken.js";

const videoRouter = Router();

videoRouter.post('/uploadVideo', verifyToken, VideoController.uploadVideo);
videoRouter.patch('/updateVideo/:id', verifyToken, VideoController.updateVideo);
videoRouter.delete('/deleteVideo/:id', verifyToken, VideoController.deleteVideo);
videoRouter.get('/getVideoStats', verifyToken, VideoController.getVideoStats);

export default videoRouter;
