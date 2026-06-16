import {Router} from "express";
import {todoController} from "../controllers/todo.controller";

export const todoRouter = Router();

todoRouter.post("/", todoController.create);
