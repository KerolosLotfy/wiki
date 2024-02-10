import express, { json } from "express";
import cors from "cors";
import { routersHandler } from "./handler/index.mjs";
import { client } from "./init-db.mjs";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

try {
  (async () => {
    app.get("/", (req, res) => {
      return res.statusCode == 200
        ? res.json("Server Running")
        : res.json({
            err: req.statusCode,
            message: req.statusMessage,
          });
    });

    app.get("/test", async (req, res) => {
      try {
        const result = await client.query("SELECT * from questions");
        res.json({ data: data.rows });
        // Hello world!
      } catch (err) {
        console.error(err);
      } finally {
        await client.end();
      }
    });

    // app.get("/test1", async (req, res) => {
    //   try {
    //     const db = await pool.connect();
    //     const data = await db.query("select * from questions");
    //     db.release(true);
    //     res.json({ data: data.rows });
    //   } catch (error) {
    //     res.json({ message: error.message });
    //   }
    // });

    routersHandler(app);

    app.use("*", (req, res) => res.send("Error: Not Found"));

    app.listen(5500, () => {
      console.log(
        `Server Running on ${process.env.URL_SERVER || "http://localhost:5500"}`
      );
    });
  })();
} catch (error) {
  app.get("/", (req, res) => {
    res.json(error);
  });
}
