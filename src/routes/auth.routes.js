import { Router } from "express";
import { login, logout, registerUser } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegistrationValidator,
} from "../validations/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", userRegistrationValidator(), validate, registerUser);
router.post("/login", userLoginValidator(), validate, login);
router.post("/logout", verifyJWT, logout);

export default router;
