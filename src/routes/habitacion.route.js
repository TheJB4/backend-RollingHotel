import { Router } from "express";
import {
    deleteHabitacion,
    getHabitacion,
    getHabitacionById,
    postHabitacion,
    putHabitacion,
} from "../controllers/habitacion.controllers.js";
import validacionHabitacion from "../helpers/validations/validacionHabitacion.js";
const router = Router();

router
    .route("/habitacion")
    .get(getHabitacion)
    .post([validacionHabitacion], postHabitacion);
router
    .route("/habitacion/:id")
    .delete(deleteHabitacion)
    .get(getHabitacionById)
    .put([validacionHabitacion], putHabitacion);

export default router;
