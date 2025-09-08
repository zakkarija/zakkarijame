// Database is currently disabled - not used in this portfolio site
// Uncomment and configure when database functionality is needed

// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";
// import { env } from "~/env";
// import * as schema from "./schema";

// const globalForDb = globalThis as unknown as {
//   conn: postgres.Sql | undefined;
// };

// const conn = globalForDb.conn ?? postgres(env.DATABASE_URL!);
// if (env.NODE_ENV !== "production") globalForDb.conn = conn;

// export const db = drizzle(conn, { schema });

// Placeholder export to prevent import errors
export const db = null as unknown as never;
