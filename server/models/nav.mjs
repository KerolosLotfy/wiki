import { pool } from "../init-db.mjs";

export class Nav {
  create = async (title) => {
    try {
      const conDB = await pool.connect();
      const sql = `insert into nav (title) values ($1);`;
      const result = await pool.query(sql, [title]);
      conDB.release();
      if (result.rowCount) return "Added";
    } catch (e) {
      throw new Error(`Can't create new Nav tab to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from nav`;
      const result = await pool.query(sql);
      conDB.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Can't get all Nav tabs to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from nav WHERE id =$1`;
      const result = await pool.query(sql, [id]);
      conDB.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Can't get Nav Tab to ${e.message}`);
    }
  };

  update = async ({ id, title }) => {
    try {
      const conDB = await pool.connect();
      const sql = `UPDATE nav SET title=$1 WHERE id=$2`;
      const result = await pool.query(sql, [title, id]);
      conDB.release();
      if (result.rowCount) return "Updated";
    } catch (e) {
      throw new Error(`Can't Update Nav tab to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `DELETE FROM nav WHERE id =$1`;
      const result = await pool.query(sql, [id]);
      conDB.release();
      if (result.rowCount) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete Nav Tab to ${e.message}`);
    }
  };
}
