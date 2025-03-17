import { Router } from "express";

const clientRouter = Router();
clientRouter.get("/", (req, res)=>{
    res.send("User response");
})

export default clientRouter;
