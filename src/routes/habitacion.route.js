import { Router } from "express";
import {
    deleteHabitacion,
    getHabitacion,
    getHabitacionById,
    postHabitacion,
    putHabitacion,
} from "../controllers/habitacion.controllers.js";

const router = Router();

router.route("/habitacion").get(getHabitacion).post(postHabitacion);
router
    .route("/habitacion/:id")
    .delete(deleteHabitacion)
    .get(getHabitacionById)
    .put(putHabitacion);

export default router;
