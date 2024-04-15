import Reserva from "../database/models/reserva.js";

export const postReserva = async (req, res) => {
    const { idHabitacion, idUsuario, informacion } = req.body;
    try {
        const reserva = new Reserva(req.body);
        await reserva.save();
        res.status(201).json({ message: "Reserva registrada con exito!" });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Error! No se pudo generar la reserva",
        });
    }
};
export const deleteReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) {
            res.status(404).json({
                message: "La reserva no fue encontrada",
            });
        }
        await Reserva.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Reserva eliminada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "La reserva no pudo ser eliminada" });
    }
};
export const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Error al obtener reservas" });
    }
};
export const getReservaById = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        res.status(200).json(reserva);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Reserva no encontrada" });
    }
};
