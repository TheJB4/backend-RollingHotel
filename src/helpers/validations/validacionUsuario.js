import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario = [
    check("apellido")
        .notEmpty()
        .withMessage("El apellido del usuario es obligatorio")
        .isLength({ min: 2, max: 40 })
        .withMessage("El apellido debe tener entre 2 y 40 caracteres"),
    check("nombre")
        .notEmpty()
        .withMessage("El nombre del usuario es obligatorio")
        .isLength({ min: 2, max: 40 })
        .withMessage("El nombre debe tener entre 2 y 40 caracteres"),
    check("telefono")
        .notEmpty()
        .withMessage("El telefono del usuario es obligatorio")
        .isLength({ min: 6, max: 15 })
        .withMessage("El telefono debe tener entre 6 y 15 caracteres"),
    check("email")
        .notEmpty()
        .withMessage("El correo del usuario es obligatorio")
        .matches(/.+\@.+\..+/)
        .withMessage("El correo electronico debe ser valido"),
    check("password").notEmpty().withMessage("la contraseña es obligatoria"),
    check("activo")
        .notEmpty()
        .withMessage("El estado del usuario es obligatorio")
        .isBoolean()
        .withMessage("El estado debe ser booleano"),
    (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
