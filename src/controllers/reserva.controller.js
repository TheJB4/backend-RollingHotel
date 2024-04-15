import {Reserva} from '../database/models/reservas.js'

export const getReserva = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        res.status(200).json(reservas);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Error al obtener Reservas" });
    }
};
export const getReservaById = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        res.status(200).json(reserva);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: "La Reserva no fue encontrada",
        });
    }
};
export const postReserva = async (req, res) => {
    try {
        const reserva = new Reserva(req.body);
        const nueva = await reserva.save();
        res.status(201).json({ message: "Reserva creada con exito!" });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Error! No se pudo dar de alta la reserva",
        });
    }
};
export const deleteReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) {
            res.status(404).json({
                message: "La Reserva no fue encontrada",
            });
        }
        await Reserva.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Reserva eliminada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error! La Reserva no pudo ser eliminada",
        });
    }
};

export const putReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id);
        if (!reserva) {
            res.status(404).json({
                message: "La reserva no fue encontrada",
            });
        }
        await Reserva.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Reserva actualizada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al editar reserva" });
    }
};
