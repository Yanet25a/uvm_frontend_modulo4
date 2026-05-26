import express from "express";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weather.routes.js"; //rutas para trabajar

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; //puerto de escucha

// Middleware
app.use(express.json()); //trabaja con json
app.use(express.static("src/public")); //ruta de los archivos iniciales

// Rutas
app.use("/api/weather", weatherRoutes);
// si el puesto está listo para la escucha, todo inició bien
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});