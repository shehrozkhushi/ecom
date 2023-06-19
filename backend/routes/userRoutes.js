import {Router} from "express";
import userController from "../controller/userController.js";


const router = Router();

router.post("/register", userController.registerUser)



export default router;