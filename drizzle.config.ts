import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";


dotenv.config();
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned"+ process.env.DATABASE_URL);
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
