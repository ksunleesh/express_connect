import z from "zod";

export const createTodoSchema = z.object({
  title: z.string("Title must be a string").trim().min(1, "Title is required"),
  status: z.boolean("status must be a true or false").optional(),
  dueDate: z.iso.date("Invalid ISO date format").optional(),
});

export const updateTodoSchema = createTodoSchema.partial();
