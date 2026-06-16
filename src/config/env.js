import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().max(65535),
  DATABASE_URL: z.url(),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.log("Env validation failed");
  console.error(z.prettifyError(result.error));
  process.exit(1);
}

export const env = result.data;
