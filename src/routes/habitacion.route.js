import { Router } from "express";
import {
    deleteHabitacion,
    getHabitacion,
    getHabitacionById,
    postHabitacion,
    putHabitacion,
} from "../controllers/habitacion.controllers.js";
import validacionHabitacion from "../helpers/validations/validacionHabitacion.js";
import validarJWT from "../helpers/jwt/validarJWT.js";
const router = Router();

router
    .route("/habitacion")
    .get(getHabitacion)
    .post([validarJWT, validacionHabitacion], postHabitacion);
router
    .route("/habitacion/:id")
    .delete([validarJWT], deleteHabitacion)
    .get(getHabitacionById)
    .put([validarJWT, validacionHabitacion], putHabitacion);

export default router;
