import {Router} from "express";
import {authController} from "../controllers/auth.controller.js";
import {loginSchema, registerSchema} from "../schemas/auth.schema.js";
import {validate} from "../middlewares/validate.middleware.js";
import {authenticate} from "../middlewares/authenticate.middleware.js";

const authRouter = Router();

authRouter.post("/register", validate({body: registerSchema}), authController.register);
authRouter.post("/login", validate({body: loginSchema}), authController.login);
authRouter.get("/me", authenticate, authController.getMe);

export {authRouter};
