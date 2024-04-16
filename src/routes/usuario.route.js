import { Router } from "express";
import {
    deleteUsuario,
    putUsuario,
    getUsuarioById,
    getUsuarios,
    postUsuario,
    login,
} from "../controllers/usuario.controllers.js";
import validacionUsuario from "../helpers/validations/validacionUsuario.js";
import validarJWT from "../helpers/jwt/validarJWT.js";
const router = Router();

router.route("/").get(getUsuarios).post([validacionUsuario], postUsuario);
router.route("/auth").post(login);
router
    .route("/:id")
    .get(getUsuarioById)
    .put([validarJWT, validacionUsuario], putUsuario)
    .delete([validarJWT], deleteUsuario);

export default router;
