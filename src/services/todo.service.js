import {prisma} from "../db/prisma.js";

export const todoService = {};

todoService.create = (userId, input) => {
  return prisma.todo.create({
    data: {
      userId,
      ...input,
    },
  });
};
