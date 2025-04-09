import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";


dotenv.config();
database = "postgresql://neondb_owner:npg_CEvNB8yQgGL3@ep-holy-feather-a5okqfyy-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
if (!database) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
