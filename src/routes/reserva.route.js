import { Router } from "express";
import {
    deleteReserva,
    getReservaById,
    getReservas,
    postReserva,
} from "../controllers/reserva.controllers.js";
import validarJWT from "../helpers/jwt/validarJWT.js";
import validacionReserva from "../helpers/validations/validacionReserva.js";

const router = Router();

router
    .route("/reservas")
    .get(getReservas)
    .post([validarJWT, validacionReserva], postReserva);
router
    .route("/reservas/:id")
    .get(getReservaById)
    .delete([validarJWT], deleteReserva);

export default router;
