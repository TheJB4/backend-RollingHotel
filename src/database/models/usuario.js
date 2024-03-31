import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({ 
    apellido:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    nombre:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    telefono:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 15
    },
    correo:{
        type: String,
        required: true,
        minLength: 8,
        maxLength: 50
    },
    domicilio:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    ciudad:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300
    },
    provincia:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30
    },
    pais:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 300
    },
    rol:{
        type:String,
        required:true,
        enum:["Admin", "Cliente"]
    },
    esAdmin:{
        type: Boolean
    }
})

const Usuario = mongoose.model('usuario',usuarioSchema)

export default Usuario;