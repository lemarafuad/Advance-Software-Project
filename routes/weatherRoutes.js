// routes/weatherRoutes.js
import express from 'express';
import { fetchWeatherData } from '../controller/weatherController.js';

const router = express.Router();

router.get('/weather', fetchWeatherData);

export default router;
