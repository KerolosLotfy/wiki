import { openDb } from "../sql/init-db.js";

export class Tabs {
  create = async ({ navId, title, mainTitle }) => {
    try {
      const DB = await openDb();
      const sql = `insert into tabs (navId,title,mainTitle) values (?,?,?);`;
      const result = await DB.run(sql, [navId, title, mainTitle]);
      return result.changes;
    } catch (e) {
      throw new Error(`Can't create new tab to ${e.message}`);
    }
  };

  getAll = async (navId) => {
    try {
      console.log(navId);
      const DB = await openDb();
      const sql = `select * from tabs where navId=?`;
      const result = await DB.all(sql, [navId]);
      return result;
    } catch (e) {
      throw new Error(`Can't get all tabs to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const DB = await openDb();
      const sql = `select * from tabs WHERE id =?`;
      const result = await DB.get(sql, [id]);
      return result;
    } catch (e) {
      throw new Error(`Can't get Tab to ${e.message}`);
    }
  };

  update = async ({ id, title, mainTitle }) => {
    try {
      const DB = await openDb();
      const sql = `UPDATE tabs SET title = ?,mainTitle = ? WHERE id = ?`;
      const result = await DB.run(sql, [title, mainTitle, id]);
      if (result.changes) return "Updated";
    } catch (e) {
      throw new Error(`Can't Update tab to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      const DB = await openDb();
      const sql = `DELETE FROM tabs WHERE id =?`;
      const result = await DB.run(sql, [id]);
      if (result.changes) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete Tab to ${e.message}`);
    }
  };
}
