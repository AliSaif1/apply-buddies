import { Router } from "express";
import ProgramController from "../../../../controllers/adminControllers/programController.js";
import verifyToken from "../../../../middleware/verifyToken.js";

const programRouter = Router();

programRouter.post('/addProgram', verifyToken, ProgramController.addPrograms);
programRouter.patch('/updateProgram/:id', verifyToken, ProgramController.updateProgram);
programRouter.delete('/deleteProgram/:id', verifyToken, ProgramController.deleteProgram);

export default programRouter;
