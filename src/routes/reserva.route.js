import { Router } from "express";
import {
    deleteReserva,
    getReservaById,
    getReservas,
    postReserva,
} from "../controllers/reserva.controllers.js";

const router = Router();

router.route("/reservas").get(getReservas).post(postReserva);
router.route("/reservas/:id").get(getReservaById).delete(deleteReserva);

export default router;
