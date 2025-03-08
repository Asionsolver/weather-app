import { useEffect, useState } from "react";
import { useWeatherApi } from '../hooks/useWeatherApi';
import { useGeolocation } from '../hooks/useGeolocation';
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

    // Initial load - try to get user location
    useEffect(() => {
        handleLocationSearch();

    }, []);



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