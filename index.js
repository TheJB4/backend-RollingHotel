import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import "./src/database/conection.js";

import habitacionRouter from "./src/routes/habitacion.route.js";
import usuarioRouter from "./src/routes/usuario.route.js";
import reservaRouter from "./src/routes/reserva.route.js";

const app = express();

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => {
    console.log("El servidor esta corriedo en: " + `http://localhost:${PORT}`);
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/public")));

app.use("/api", habitacionRouter);
app.use("/api", reservaRouter);
app.use("/api/usuario", usuarioRouter);
