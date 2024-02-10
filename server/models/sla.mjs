import { pool } from "../init-db.mjs";

export class SLA {
  create = async ({ cases, normal, delay }) => {
    try {
      const conDB = await pool.connect();
      const sql = `insert into sla (cases,normal,delay) values ($1,$2,$3);`;
      const result = await conDB.query(sql, [cases, normal, delay]);
      conDB.release();
      if (result.rowCount) return "Added";
    } catch (e) {
      throw new Error(`Can't create new sla to ${e.message}`);
    }
  };

  getAll = async () => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from sla`;
      const result = await conDB.query(sql);
      conDB.release();
      return result.rows;
    } catch (e) {
      throw new Error(`Can't get all sla to ${e.message}`);
    }
  };

  getOne = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `select * from sla where id=$1 `;
      const result = await conDB.query(sql, [id]);
      conDB.release();
      return result.rows[0];
    } catch (e) {
      throw new Error(`Can't get a sla to ${e.message}`);
    }
  };

  update = async ({ id, cases, normal, delay }) => {
    try {
      const conDB = await pool.connect();
      const sql = `UPDATE sla SET cases = $1, normal = $2 ,delay = $3 WHERE id = $4`;
      const result = await conDB.query(sql, [cases, normal, delay, id]);
      conDB.release();
      if (result.rowCount) return "Updated";
    } catch (e) {
      throw new Error(`Can't Update a sla to ${e.message}`);
    }
  };

  delete = async (id) => {
    try {
      const conDB = await pool.connect();
      const sql = `DELETE FROM sla WHERE id =$1`;
      const result = await conDB.query(sql, [id]);
      conDB.release();
      if (result.rowCount) return "Deleted";
    } catch (e) {
      throw new Error(`Can't Delete a sla to ${e.message}`);
    }
  };
}
