import pg from "pg";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config();
const config = {
  host: env.DB_HOST,
  port: env.PORT,
  database: env.DB_NAME,
  password: env.DB_PASS,
  user: env.DB_USER,
};

export const pool = new pg.Pool(config);
