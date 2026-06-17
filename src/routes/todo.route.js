import {Router} from "express";
import {todoController} from "../controllers/todo.controller.js";
import {authenticate} from "../middlewares/authenticate.middleware.js";
import {checkRole} from "../middlewares/checkRole.middleware.js";
import {createTodoSchema, updateTodoSchema} from "../schemas/todoschema.js";
import {validate} from "../middlewares/validate.middleware.js";
import {intIdSchema} from "../schemas/common.schema.js";

export const todoRouter = Router();

todoRouter.use(authenticate);
todoRouter.use(checkRole("USER"));

todoRouter.post("/", validate({body: createTodoSchema}), todoController.create);

todoRouter.put("/:id", validate({body: updateTodoSchema, params: intIdSchema}), todoController.update);
