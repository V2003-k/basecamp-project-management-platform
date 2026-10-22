import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegistrationValidator } from "../validations/index.js";

const router = Router();

router.post("/register", userRegistrationValidator(), validate, registerUser);

export default router;
