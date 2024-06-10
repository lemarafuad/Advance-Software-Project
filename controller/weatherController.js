// controllers/weatherController.js
import { getWeather } from '../services/weatherService.js';

export const fetchWeatherData = async (req, res) => {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ error: 'Location is required' });
  }

  try {
    const weatherData = await getWeather(location);
    return res.status(200).json(weatherData);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching weather data' });
  }
};
