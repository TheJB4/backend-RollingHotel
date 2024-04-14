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
const router = Router();

router.route("/").get(getUsuarios).post([validacionUsuario], postUsuario);
router.route("/auth").post(login);
router
    .route("/:id")
    .get(getUsuarioById)
    .put([validacionUsuario], putUsuario)
    .delete(deleteUsuario);

export default router;