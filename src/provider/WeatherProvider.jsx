import { useEffect, useState } from "react";
import { useWeatherApi } from '../hooks/useWeatherApi';
import { useGeolocation } from '../hooks/useGeolocation';
import { DEFAULT_CITY } from '../config/constants';
import { WeatherContext } from "../context/WeatherContext";


export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('');
    const {
        weatherData,
        forecastData,
        loading: weatherLoading,
        error: weatherError,
        fetchWeatherByCity,
        fetchWeatherByCoords
    } = useWeatherApi();

    const {
        location,
        error: locationError,
        loading: locationLoading,
        getLocation
    } = useGeolocation();

    const handleCitySearch = (city) => {
        if (!city.trim()) {
            return;
        }
        setCity(city);
        fetchWeatherByCity(city);
    };

    const handleLocationSearch = async () => {
        getLocation();
    };

    // Effect to fetch weather when location changes
    useEffect(() => {
        if (location) {
            fetchWeatherByCoords(location.latitude, location.longitude);
        }
    }, [location]);

    // Initial load - try to get user location, fallback to default city
    useEffect(() => {
        handleLocationSearch();
        // If location fails, this will be caught in the locationError and 
        // the default city will be used in the next useEffect
    }, []);

    // Fallback to default city if location fails
    useEffect(() => {
        if (locationError) {
            handleCitySearch(DEFAULT_CITY);
        }
    }, [locationError]);

    // Update city input when weather data changes
    useEffect(() => {
        if (weatherData) {
            setCity(weatherData.name);
        }
    }, [weatherData]);

    const value = {
        city,
        setCity,
        weatherData,
        forecastData,
        weatherLoading,
        weatherError,
        locationLoading,
        locationError,
        handleCitySearch,
        handleLocationSearch
    };

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
};