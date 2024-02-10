import express, { json } from "express";
import cors from "cors";
import { routersHandler } from "./handler/index.mjs";
import { pool } from "./init-db.mjs";

const port = process.env.PORT || 5500
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
        const data = await pool.query("select * from questions");
        // db.release()
        res.json({ data: data.rows });
      } catch (error) {
        res.json({ message: error.message });
      }
    });

    // app.get("/test1", async (req, res) => {
    //   try {
    //     const db = await pool.connect();
    //     const data = await db.query("select * from nav");
    //     db.release()
    //     res.json({ data: data.rows });
    //   } catch (error) {
    //     res.json({ message: error.message });
    //   }
    // });

    routersHandler(app);

    app.use("*", (req, res) => res.send("Error: Not Found"));

    app.listen(port, () => {
      console.log(
        `Server Running on ${port}  }`
      );
    });
  })();
} catch (error) {
  app.get("/", (req, res) => {
    res.json(error);
  });
}
