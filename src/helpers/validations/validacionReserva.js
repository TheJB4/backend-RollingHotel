import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionReserva = [
    check("userId")
        .notEmpty()
        .withMessage("el identificador del usuario es obligatorio"),
    check("habId")
        .notEmpty()
        .withMessage("el identificador de la habitacion es obligatorio"),
];

export default validacionReserva;
