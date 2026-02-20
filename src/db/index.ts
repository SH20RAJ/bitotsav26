import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL!;

// Use connection pooling for queries (pgbouncer)
const client = postgres(connectionString, {
  prepare: false, // Required for pgbouncer/Supabase pooling
});

export const db = drizzle(client, { schema });
