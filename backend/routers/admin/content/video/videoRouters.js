import { Router } from "express";
import VideoController from "../../../../controllers/adminControllers/videoController.js";
import verifyToken from "../../../../middleware/verifyToken.js";

const videoRouter = Router();

videoRouter.post('/uploadVideo', verifyToken, VideoController.uploadVideo);
videoRouter.patch('/updateVideo/:id', verifyToken, VideoController.updateVideo);
videoRouter.delete('/deleteVideo/:id', verifyToken, VideoController.deleteVideo);

export default videoRouter;
