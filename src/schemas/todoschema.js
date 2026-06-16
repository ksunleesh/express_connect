import z from "zod";

export const createTodoSchema = z.object({
  title: z.string("Title must be a string").min(1, "Title is required"),
  status: z.boolean().optional(),
  dueDate: z.iso.date().optional(),
});
