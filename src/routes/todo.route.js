import {Router} from "express";
import {todoController} from "../controllers/todo.controller.js";
import {authenticate} from "../middlewares/authenticate.middleware.js";

export const todoRouter = Router();

todoRouter.use(authenticate);
todoRouter.use(checkRole("USER"));

todoRouter.post("/", todoController.create);
