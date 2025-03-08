import { useState } from 'react';
import * as weatherService from '../services/weatherService';

export const useWeatherApi = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch weather data by city
    const fetchWeatherByCity = async (city) => {
        setLoading(true);
        setError(null);

        try {
            const [weather, forecast] = await Promise.all([
                weatherService.fetchWeatherByCity(city),
                weatherService.fetchForecastByCity(city)
            ]);

            setWeatherData(weather);
            setForecastData(forecast);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
            setForecastData(null);
        } finally {
            setLoading(false);
        }
    };

    // Fetch weather data by coordinates
    const fetchWeatherByCoords = async (lat, lon) => {
        setLoading(true);
        setError(null);

        try {
            const [weather, forecast] = await Promise.all([
                weatherService.fetchWeatherByCoords(lat, lon),
                weatherService.fetchForecastByCoords(lat, lon)
            ]);

            setWeatherData(weather);
            setForecastData(forecast);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
            setForecastData(null);
        } finally {
            setLoading(false);
        }
    };

    return {
        weatherData,
        forecastData,
        loading,
        error,
        fetchWeatherByCity,
        fetchWeatherByCoords
    };
};