import { pool } from "../init-db.mjs";

export class SubTabs {
  create = async ({ tabId, title, content }) => {
    try {
      const conDB = await pool.connect();
      const sql = `insert into subTabs (tabId,title,content) values ($1,$2,$3);`;
      const result = await conDB.query(sql, [tabId, title, content]);
      conDB.release();
      if (result.rowCount) return "Added";
    } catch (e) {
      throw new Error(`Can't create new subTab to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from subTabs`;
      const result = await conDB.query(sql);
      conDB.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Can't get all subTabs to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from subTabs WHERE id =$1`;
      const result = await conDB.query(sql, [id]);
      conDB.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Can't get subTab to ${e.message}`);
    }
  };

  getByTab = async (tabId) => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from subTabs WHERE tabId =$1`;
      const result = await conDB.query(sql, [tabId]);
      conDB.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Can't get Tab by navId to ${e.message}`);
    }
  };

  update = async ({ id, title, content }) => {
    try {
      const conDB = await pool.connect();
      const sql = `UPDATE subTabs SET title = $1,content = $2 WHERE id = $3`;
      const result = await conDB.query(sql, [title, content, id]);
      if (result.rowCount) return "Updated";
    } catch (e) {
      throw new Error(`Can't Update subTab to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `DELETE FROM subTabs WHERE id =$1`;
      const result = await conDB.query(sql, [id]);
      if (result.rowCount) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete subTab to ${e.message}`);
    }
  };
}
