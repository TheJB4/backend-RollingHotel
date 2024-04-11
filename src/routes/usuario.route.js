import { Router } from "express";
import {
    deleteUsuario,
    putUsuario,
    getUsuarioById,
    getUsuarios,
    postUsuario,
} from "../controllers/usuario.controllers.js";
import validacionUsuario from "../helpers/validations/validacionUsuario.js";
const router = Router();

router
    .route("/usuario")
    .get(getUsuarios)
    .post([validacionUsuario], postUsuario);
router
    .route("/usuario/:id")
    .get(getUsuarioById)
    .put([validacionUsuario], putUsuario)
    .delete(deleteUsuario);

export default router;
