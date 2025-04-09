import { Router } from "express";
import AudienceDataController from "../../../controllers/adminControllers/audienceDataController.js";
import verifyToken from "../../../middleware/verifyToken.js";

const audienceDataRouter = Router();

audienceDataRouter.get('/getAllAudienceUsers', verifyToken, AudienceDataController.getTotalUsers);
audienceDataRouter.get('/getAllProfessionalUsers', verifyToken, AudienceDataController.getTotalProfessionals);

export default audienceDataRouter;
