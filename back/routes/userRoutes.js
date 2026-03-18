import express from "express";
import { getAuthenticatedUser, login, logout, protect, signup } from "../controllers/authController.js";


const usersRouter = express.Router();
usersRouter.route("/signup").post(signup);
usersRouter.route("/login").post(login);
usersRouter.route("/logout").get(protect, logout);
usersRouter.route("/me").get(protect, getAuthenticatedUser);

export default usersRouter;
