import {todoService} from "../services/todo.service.js";

export const todoController = {};

todoController.create = async (req, res) => {
  const todo = await todoService.create(req.user.id, req.body);
  res.status(201).json({todo});
};

todoController.update = async (req, res) => {};
