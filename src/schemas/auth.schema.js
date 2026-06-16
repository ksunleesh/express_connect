import z from "zod";

const passwordSchema = z.string().regex(/^[0-9a-zA-Z]{6,}$/);

export const registerSchema = z
  .object({
    email: z.email("Invalid email address"),
    password: passwordSchema,
    confirm: passwordSchema,
  })
  .refine((value) => value.password === value.confirm, {
    error: "Passwords do not match",
    path: ["confirm"],
  })
  .transform(({confirm, ...data}) => data);

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string("Password must be a string").min(1, "Password is required"),
});
