import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import * as schema from "@shared/schema";
import * as dotenv from "dotenv";


dotenv.config();
database = "postgresql://neondb_owner:npg_CEvNB8yQgGL3@ep-holy-feather-a5okqfyy-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"

neonConfig.webSocketConstructor = ws;

if (!database) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });
