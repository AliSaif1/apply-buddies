import { Router } from "express";
import adminRouter from "./admin/adminRouter.js";

const routerBranching = Router();

routerBranching.use("/admin", adminRouter);

export default routerBranching;
