import { pool } from "../init-db.mjs";

export class Question {
  create = async ({ question, answer }) => {
    try {
      const conDB = await pool.connect();
      const sql = `insert into questions (question,answer) values ($1,$2);`;
      const result = await pool.query(sql, [question, answer]);
      conDB.release();
      if (result.rowCount) return "Added";
    } catch (e) {
      throw new Error(`Can't create new questions to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from questions`;
      const result = await conDB.query(sql);
      conDB.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Can't get all questions to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from questions where id=$1 `;
      const result = await pool.query(sql, [id]);
      conDB.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Can't get a question to ${e.message}`);
    }
  };

  update = async ({ id, question, answer }) => {
    try {
      const conDB = await pool.connect();
      const sql = `UPDATE questions SET question = $1, answer = $2 WHERE id = $3`;
      const result = await pool.query(sql, [question, answer, id]);
      conDB.release();
      if (result.rowCount) return "Updated";
    } catch (e) {
      throw new Error(`Can't Update a question to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `DELETE FROM questions WHERE id =$1`;
      const result = await pool.query(sql, [id]);
      conDB.release();
      if (result.rowCount) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete a question to ${e.message}`);
    }
  };
}
