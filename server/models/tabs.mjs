import { pool } from "../init-db.mjs";

export class Tabs {
  create = async ({ navId, title, mainTitle }) => {
    try {
      const conDB = await pool.connect();
      const sql = `insert into tabs (navId,title,mainTitle) values ($1,$2,$3);`;
      const result = await conDB.query(sql, [navId, title, mainTitle]);
      pool.end();
      if (result.rowCount) return "Added";
    } catch (e) {
      throw new Error(`Can't create new tab to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from tabs`;
      const result = await conDB.query(sql);
      pool.end();
      return result.rows;
    } catch (e) {
      throw new Error(`Can't get all tabs to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from tabs WHERE id =$1`;
      const result = await conDB.query(sql, [id]);
      pool.end();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Can't get Tab to ${e.message}`);
    }
  };

  getByNav = async (navId) => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from tabs WHERE navId =$1`;
      const result = await conDB.query(sql, [navId]);
      pool.end();
      return result.rows;
    } catch (e) {
      throw new Error(`Can't get Tab by navId to ${e.message}`);
    }
  };

  update = async ({ id, title, mainTitle }) => {
    try {
      const conDB = await pool.connect();
      const sql = `UPDATE tabs SET title = $1,mainTitle = $2 WHERE id = $3`;
      const result = await conDB.query(sql, [title, mainTitle, id]);
      pool.end();
      if (result.rowCount) return "Updated";
    } catch (e) {
      throw new Error(`Can't Update tab to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `DELETE FROM tabs WHERE id =$1`;
      const result = await conDB.query(sql, [id]);
      pool.end();
      if (result.rowCount) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete Tab to ${e.message}`);
    }
  };
}
