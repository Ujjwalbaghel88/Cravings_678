// import express from 'express';
// import { LoginUser, LogoutUser, RegisterUser } from "../controllers/auth.controller.js";
// import { sampleMiddleWare, sampleMiddleWare2 } from "../middlewares/auth.middleware.js";

// const router = express.Router();

// router.post("/login", sampleMiddleWare2, LoginUser);
// router.post("/register", sampleMiddleWare, sampleMiddleWare2, RegisterUser);
// router.get("/logout", sampleMiddleWare, LogoutUser);

// export default router;

import express from "express";

console.log("✅ Auth Router Loaded");
import {
    LoginUser,
    LogoutUser,
    RegisterUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);


export default router;