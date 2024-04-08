import Usuario from "../database/models/usuario.js";

export const postUsuario = async (req, res) => {
    try {
        const usuarioNew = new Usuario(req.body);
        await usuarioNew.save();
        res.status(201).json("Se guardo un nuevo Usuario!");
    } catch (error) {
        console.error(error);
        res.status(400).json({
            mensaje: "error: no se pudo crear el Usuario",
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

export const editUsuario = async (req, res) => {
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
