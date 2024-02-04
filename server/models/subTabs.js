import { openDb } from "../sql/init-db.js";

export class SubTabs {
  create = async ({ tabId, title, content }) => {
    try {
      const DB = await openDb();
      const sql = `insert into subTabs (tabId,title,content) values (?,?,?);`;
      const result = await DB.run(sql, [tabId, title, content]);
      return result.changes;
    } catch (e) {
      throw new Error(`Can't create new subTab to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const DB = await openDb();
      const sql = `select * from subTabs`;
      const result = await DB.all(sql);
      return result;
    } catch (e) {
      throw new Error(`Can't get all subTabs to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const DB = await openDb();
      const sql = `select * from subTabs WHERE id =?`;
      const result = await DB.get(sql, [id]);
      return result;
    } catch (e) {
      throw new Error(`Can't get subTab to ${e.message}`);
    }
  };

  update = async ({ id, title, content }) => {
    try {
      const DB = await openDb();
      const sql = `UPDATE subTabs SET title = ?,content = ? WHERE id = ?`;
      const result = await DB.run(sql, [title, content, id]);
      if (result.changes) return "Updated";
    } catch (e) {
      throw new Error(`Can't Update subTab to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      const DB = await openDb();
      const sql = `DELETE FROM subTabs WHERE id =?`;
      const result = await DB.run(sql, [id]);
      if (result.changes) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete subTab to ${e.message}`);
    }
  };
}
