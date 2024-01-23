import { openDb } from "../sql/init-db.js";

export class Api {
    create = async ({ question, answer }) => {
        try {
            const DB = await openDb();
            const sql = `insert into quizzes (question,answer) values (?,?);`;
            const result = await DB.run(sql, [question, answer]);
            return result.changes;
        } catch (e) {
            throw new Error(`Can't create new quizzes to ${e.message}`);
        }
    };

    getAll = async () => {
        try {
            const DB = await openDb();
            const sql = `select * from quizzes`;
            const result = await DB.all(sql);
            return result;
        } catch (e) {
            throw new Error(`Can't get all quizzes to ${e.message}`);
        }
    };

    getOne = async (id) => {
        try {
            const DB = await openDb();
            const sql = `select * from quizzes WHERE id =?`;
            const result = await DB.get(sql, [id]);
            return result;
        } catch (e) {
            throw new Error(`Can't get all quizzes to ${e.message}`);
        }
    };

    update = async ({ id, question, answer }) => {
        try {
            const DB = await openDb();
            const sql = `UPDATE quizzes SET question = ?, answer = ? WHERE id = ?`;
            const result = await DB.run(sql, [question, answer, id]);
            return result;
        } catch (e) {
            throw new Error(`Can't Update skill to ${e.message}`);
        }
    };

    delete = async (id) => {
        try {
            const DB = await initDB();
            const sql = `DELETE FROM quizzes WHERE id =?`;
            const result = await DB.run(sql, [id]);
            return result;
        } catch (e) {
            throw new Error(`Can't Delete skill to ${e.message}`);
        }
    };
}
