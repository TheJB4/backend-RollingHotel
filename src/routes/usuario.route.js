import { Router } from "express";
import {
    deleteUsuario,
    editUsuario,
    getUsuarioById,
    getUsuarios,
    postUsuario,
} from "../controllers/usuario.controllers.js";

const router = Router();

router.route("/usuario").get(getUsuarios).post(postUsuario);
router
    .route("/usuario/:id")
    .get(getUsuarioById)
    .put(editUsuario)
    .delete(deleteUsuario);

export default router;
