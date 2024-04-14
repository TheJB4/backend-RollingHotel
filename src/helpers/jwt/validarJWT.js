import jwt from "jsonwebtoken";
import "dotenv/config";

const validarJWT = (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            mensaje: "No hay token en la peticion",
        });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req._id = payload.uid;
        req.email = payload.email;
        next();
    } catch (error) {
        console.error("Error al verificar el token:", error.message);
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                mensaje: "Token no valido",
            });
        } else if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                mensaje: "Token expirado",
            });
        } else {
            return res.status(401).json({
                mensaje: "Error en la autenticacion",
            });
        }
    }
};

export default validarJWT;
