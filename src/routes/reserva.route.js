import { Router } from "express";
import { deleteReserva, getReserva, getReservaById, postReserva, putReserva } from "../controllers/reserva.controller.js";

const router = Router();

router.route("/reserva")
    .get(getReserva)
    .post(postReserva)
router.route("/reserva/:id")
    .get(getReservaById)
    .put(putReserva)
    .delete(deleteReserva)

export default router