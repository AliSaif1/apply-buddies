import { Router } from "express";
import UniversityController from "../../../../controllers/adminControllers/universityController.js";
import verifyToken from "../../../../middleware/verifyToken.js";

const universityRouter = Router();

universityRouter.post('/addUniversity', verifyToken, UniversityController.addUniversity);
universityRouter.patch('/updateUniversity/:id', verifyToken, UniversityController.updateUniversity);
universityRouter.delete('/deleteUniversity/:id', verifyToken, UniversityController.deleteUniversity);

export default universityRouter;
