import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


export const openDb = async () => {
    const db = await open({
        filename: path.join(__dirname, 'database.sqlite'),
        driver: sqlite3.Database
    })

    await db.migrate({
        migrationsPath: path.join(__dirname, "migrations"),
    });
    return db
}