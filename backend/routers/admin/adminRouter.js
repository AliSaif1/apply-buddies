import { Router } from "express";


const adminRouter = Router();
adminRouter.get("/", (req, res)=>{
    res.send("admin response");
})

export default adminRouter;
