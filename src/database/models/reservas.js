import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
    fechaEntrada:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 10,
    },
    fechaSalida:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 10,
    },
    habitacion:{
        type: String,
        required: true,
    },
    cliente:{
        type: String,
        required: true,
    }
})

export const Reserva = mongoose.model("Reserva",reservaSchema)
