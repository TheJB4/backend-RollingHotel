import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
    informacion: {
        type: String,
        minLength: 10,
        maxLength: 600,
    },
    userId: {
        type: String,
        required: true,
    },
    habitacion: [
        {
            idHabitacion: { type: String, required: true },
            fechaNoDisponible: { type: [String], required: true },
        },
    ],
});

const Reserva = mongoose.model("Reserva", reservaSchema);

export default Reserva;
