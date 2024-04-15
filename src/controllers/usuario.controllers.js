import Usuario from "../database/models/usuario.js";
import bcrypt from "bcrypt";
import generarJWT from "../helpers/jwt/generarJWT.js";

export const postUsuario = async (req, res) => {
    try {
        const user = await Usuario.findOne({ email: req.body.email });
        if (user) {
            return res
                .status(400)
                .json({ message: "El email ya esta registrado" });
        }
        const usuarioNew = new Usuario(req.body);
        const salt = bcrypt.genSaltSync(10);
        usuarioNew.password = bcrypt.hashSync(req.body.password, salt);
        await usuarioNew.save();
        res.status(201).json({ message: "Se guardo un nuevo Usuario!" });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            mensaje: "error: no se pudo crear el Usuario",
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Usuario.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ message: "EMAIL o password incorrecto" });
        }
        const userPassword = bcrypt.compareSync(password, user.password);
        if (!userPassword) {
            return res
                .status(400)
                .json({ message: "Email o PASSWORD incorrecto" });
        }
        if (!user.activo) {
            return res.status(400).json({ message: "Usuario suspendido" });
        }
        const token = await generarJWT(user._id, user.email);
        res.status(200).json({
            message: "El usuario ingreso correctamente!",
            email: user.email,
            nombre: user.nombre,
            esAdmin: user.esAdmin,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "Error al comprobar credenciales del usuario",
        });
    }
};

export const getUsuarios = async (req, res) => {
    try {
        const listaUsuarios = await Usuario.find();
        res.status(200).json(listaUsuarios);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            mensaje: "error: no se pudo obtener la lista de Usuarios",
        });
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const UsuarioBuscado = await Usuario.findById(req.params.id);
        res.status(200).json(UsuarioBuscado);
    } catch (error) {
        console.error(error);
        res.status(404).json({ mensaje: "No se encontro el Usuario buscado" });
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({
                message: "No se encontro al usuario requerido",
            });
        }
        const deleted = await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Usuario eliminado con exito" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Error al eliminar el usuario" });
    }
};

export const putUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            res.status(404).json({
                message: "No se encontro al usuario requerido",
            });
        }
        await Usuario.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Usuario editado con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al editar el usuario" });
    }
};
