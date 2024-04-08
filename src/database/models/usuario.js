import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    apellido: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30,
    },
    nombre: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30,
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
        minLength: 8,
        maxLength: 16,
        match: [
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,16}$/,
            "La contraseña debe tener al menos una letra minuscula, una letra mayuscula, un numero y un caracter especial",
        ],
    },
    esAdmin: {
        type: Boolean,
    },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
