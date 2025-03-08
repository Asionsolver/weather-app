import { API_BASE_URL, API_KEY, UNITS } from '../config/constants';

export const fetchWeatherByCity = async (city) => {
    if (!API_KEY) {
        throw new Error('API key is not configured');
    }


    // Fetch weather data by city
    const response = await fetch(
        `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${UNITS}`
    );

    if (!response.ok) {
        throw new Error('City not found. Please try again.');
    }

    return response.json();
};

export const fetchForecastByCity = async (city) => {
    if (!API_KEY) {
        throw new Error('API key is not configured');
    }

    // Fetch forecast data by city
    const response = await fetch(
        `${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${UNITS}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch forecast data');
    }

    return response.json();
};

export const fetchWeatherByCoords = async (lat, lon) => {
    if (!API_KEY) {
        throw new Error('API key is not configured');
    }

    // Fetch weather data by coordinates
    const response = await fetch(
        `${API_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}`
    );

    if (!response.ok) {
        throw new Error('Could not fetch weather data for your location.');
    }

    return response.json();
};

export const fetchForecastByCoords = async (lat, lon) => {
    if (!API_KEY) {
        throw new Error('API key is not configured');
    }

    // Fetch forecast data by coordinates
    const response = await fetch(
        `${API_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch forecast data');
    }

    return response.json();
};