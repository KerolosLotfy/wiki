import express from "express";
import cors from "cors";
import { routersHandler } from "./handler/index.mjs";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

try {
  (async () => {
    
    app.get("/t_s", (req, res) => {
      return res.statusCode == 200
        ? res.json("Server Running")
        : res.json({
            err: req.statusCode,
            message: req.statusMessage,
          });
    });

    routersHandler(app);

    app.use("*", (req, res) => res.send("Error: Not Found"));

    app.listen(5500, () => {
      console.log("Server Running on http://localhost:5500");
    });
  })();
} catch (error) {
  app.get("/", (req, res) => {
    res.json(error);
  });
}
