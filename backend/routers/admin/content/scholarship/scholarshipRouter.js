import { Router } from "express";
import ScholarshipController from "../../../../controllers/adminControllers/scholarshipController.js";
import verifyToken from "../../../../middleware/verifyToken.js";

const scholarshipRouter = Router();

scholarshipRouter.post('/addScholarship', verifyToken, ScholarshipController.addScholarship);
scholarshipRouter.patch('/updateScholarship/:id', verifyToken, ScholarshipController.updateScholarship);
scholarshipRouter.delete('/deleteScholarship/:id', verifyToken, ScholarshipController.deleteScholarship);

export default scholarshipRouter;
