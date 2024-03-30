import Habitacion from "../database/models/habitacion.js";

export const getHabitacion = async (req, res) => {
    try {
        const habitaciones = await Habitacion.find();
        res.status(200).json(habitaciones);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: "Error al obtener habitaciones" });
    }
};
export const getHabitacionById = async (req, res) => {
    try {
        const habitacion = await Habitacion.findById(req.params.id);
        res.status(200).json(habitacion);
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: "La habitacion no fue encontrada",
        });
    }
};
export const postHabitacion = async (req, res) => {
    try {
        const habitacion = new Habitacion(req.body);
        const nueva = await habitacion.save();
        res.status(201).json({ message: "Habitacion creada con exito!" });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Error! No se pudo dar de alta la habitacion",
        });
    }
};
export const deleteHabitacion = async (req, res) => {
    try {
        const habitacion = await Habitacion.findById(req.params.id);
        if (!habitacion) {
            res.status(404).json({
                message: "La habitacion no fue encontrada",
            });
        }
        await Habitacion.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Habitacion eliminada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error! La habitacion no pudo ser eliminada",
        });
    }
};

export const putHabitacion = async (req, res) => {
    try {
        const habitacion = await Habitacion.findById(req.params.id);
        if (!habitacion) {
            res.status(404).json({
                message: "La habitacion no fue encontrada",
            });
        }
        await Habitacion.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Habitacion actualizada con exito" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al editar habitacion" });
    }
};
