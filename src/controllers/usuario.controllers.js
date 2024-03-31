import Usuario from "../database/models/usuario.js"
import { validationResult } from "express-validator";

export const crearUsuario = async(req,res)=>{
    try {
        const errores = validationResult(req)

        if(!errores.isEmpty()){
             return res.status(400).json({
                errores: errores.array()
            })    
        }

        const usuarioNew = new Usuario(req.body);

        await usuarioNew.save()

        res.status(201).json("Se guardo un nuevo Usuario!")
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: "error: no se pudo crear el Usuario"
        })
    }
}

export const listarUsuarios = async(req,res)=>{
    try {
        const listaUsuarios= await Usuario.find()

        res.status(200).json(listaUsuarios)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            mensaje: "error: no se pudo obtener la lista de Usuarios"
        })
    }
}