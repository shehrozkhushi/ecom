import { Router } from "express";
import userRoutes from "./userRoutes.js"


const router = Router();

router.get("/", (req, res)=>
    res.status(200).json({
        success: true,
        message: "Runing"
    })
);

router.use("/user", userRoutes)


export default router;

