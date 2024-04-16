import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
    informacion: {
        type: String,
        maxLength: 600,
    },
    userId: {
        type: String,
        required: true,
    },
    habId: {
        type: String,
        required: true,
    },
});

const Reserva = mongoose.model("Reserva", reservaSchema);

export default Reserva;
