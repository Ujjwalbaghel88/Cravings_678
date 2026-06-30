
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