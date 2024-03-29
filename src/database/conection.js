import "dotenv/config";
import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;

console.log(mongoURI);

mongoose.connect(mongoURI);

const datosConexion = mongoose.connection;
datosConexion.once("open", () => {
    console.info("conexion a la base de datos exitosa");
});
