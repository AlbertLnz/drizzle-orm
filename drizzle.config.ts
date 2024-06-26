import { defineConfig } from "drizzle-kit"
import { config } from "dotenv"

config({ path: 'env' })

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql", // before was: driver: "pg"
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL!
  }
})