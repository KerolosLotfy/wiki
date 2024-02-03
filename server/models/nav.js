import { openDb } from "../sql/init-db.js";

export class Nav {
  create = async (title) => {
    try {
      const DB = await openDb();
      const sql = `insert into nav (title) values (?);`;
      const result = await DB.run(sql, [title]);
      return result.changes;
    } catch (e) {
      throw new Error(`Can't create new Nav tab to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const DB = await openDb();
      const sql = `select * from nav`;
      const result = await DB.all(sql);
      return result;
    } catch (e) {
      throw new Error(`Can't get all Nav tabs to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const DB = await openDb();
      const sql = `select * from nav WHERE id =?`;
      const result = await DB.get(sql, [id]);
      return result;
    } catch (e) {
      throw new Error(`Can't get Nav Tab to ${e.message}`);
    }
  };

  update = async ({ id, title }) => {
    try {
      const DB = await openDb();
      const sql = `UPDATE nav SET title = ? WHERE id = ?`;
      const result = await DB.run(sql, [title, id]);
      if (result.changes) return "Updated";
    } catch (e) {
      throw new Error(`Can't Update Nav tab to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      const DB = await openDb();
      const sql = `DELETE FROM nav WHERE id =?`;
      const result = await DB.run(sql, [id]);
      if (result.changes) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete Nav Tab to ${e.message}`);
    }
  };
}
