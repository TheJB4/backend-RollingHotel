import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    apellido: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 40,
    },
    nombre: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 40,
    },
    telefono: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 15,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, "Por favor ingrese un correo válido"],
    },
    password: {
        type: String,
        required: true,
    },
    activo: {
        type: Boolean,
        required: true,
    },
    esAdmin: {
        type: Boolean,
        required: true,
    },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
