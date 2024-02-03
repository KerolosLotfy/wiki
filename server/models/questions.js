import { openDb } from "../sql/init-db.js";

export class Question {
  create = async ({ question, answer }) => {
    try {
      const DB = await openDb();
      const sql = `insert into questions (question,answer) values (?,?);`;
      const result = await DB.run(sql, [question, answer]);
      return result.changes;
    } catch (e) {
      throw new Error(`Can't create new questions to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const DB = await openDb();
      const sql = `select * from questions`;
      const result = await DB.all(sql);
      console.log("kk");
      return result;
    } catch (e) {
      throw new Error(`Can't get all questions to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const DB = await openDb();
      const sql = `select * from questions WHERE id =?`;
      const result = await DB.get(sql, [id]);
      return result;
    } catch (e) {
      throw new Error(`Can't get all questions to ${e.message}`);
    }
  };

  update = async ({ id, question, answer }) => {
    try {
      const DB = await openDb();
      const sql = `UPDATE questions SET question = ?, answer = ? WHERE id = ?`;
      const result = await DB.run(sql, [question, answer, id]);
      return result;
    } catch (e) {
      throw new Error(`Can't Update skill to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      console.log(id);
      const DB = await openDb();
      const sql = `DELETE FROM questions WHERE id =?`;
      const result = await DB.run(sql, [id]);
      if (result.changes) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete a question to ${e.message}`);
    }
  };
}


