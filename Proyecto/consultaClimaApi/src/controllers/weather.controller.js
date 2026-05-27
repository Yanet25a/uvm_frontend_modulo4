import { fetchWeather } from "../services/weather.service.js";

export const getWeather = async (req, res) => {
  try {
    const city = req.query.city; // se toma el valor
    const data = await fetchWeather(city); // en data se va el fetch

    res.json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Error del servidor",
    });
  }
};