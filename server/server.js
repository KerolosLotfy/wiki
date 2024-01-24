import express from "express";
import { openDb } from "./sql/init-db.js";
import { Routers } from "./handler/index.js";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
try {
    (async () => {
        await openDb()

        Routers()

        app.listen(5500, () => {
            console.log("Server Running on http://localhost:5500");
        });
    })();
} catch (error) {
    app.get("/", (req, res) => {
        res.send(error);
    });
}
