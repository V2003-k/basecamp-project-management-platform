import { Router } from "express";
import {
  changePassword,
  forgotPasswordRequest,
  getCurrentUser,
  login,
  logout,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetForgotPassword,
  verifyEmail,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userChangeCurrentPasswordValidator,
  userForgotPasswordValidator,
  userLoginValidator,
  userRegistrationValidator,
  userResetForgotPasswordValidator,
} from "../validations/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// unsecured route
router.post("/register", userRegistrationValidator(), validate, registerUser);
router.post("/login", userLoginValidator(), validate, login);
router.get("/verify-email/:verificationToken", verifyEmail);
router.post("/refresh-token", refreshAccessToken);
router.post(
  "/forgot-password",
  userForgotPasswordValidator(),
  validate,
  forgotPasswordRequest,
);
router.post(
  "/reset-password/:resetToken",
  userResetForgotPasswordValidator(),
  validate,
  resetForgotPassword,
);

// secured route
router.post("/logout", verifyJWT, logout);
router.post("/current-user", verifyJWT, getCurrentUser);
router.post(
  "/change-password",
  userChangeCurrentPasswordValidator(),
  verifyJWT,
  changePassword,
);
router.post("/resend-email-verification", verifyJWT, resendEmailVerification);

export default router;
