import { fetchWeather } from "../services/weather.service.js";

export const getWeather = async (req, res) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({
        error: "La ciudad es requerida",
      });
    }

    const data = await fetchWeather(city);

    res.json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Error del servidor",
    });
  }
};