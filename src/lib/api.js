// API functions for fetching weather data

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY || process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

// Fetch current weather data
export async function fetchWeatherData(city = null, lat = null, lon = null) {
    let url

    if (city) {
        url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    } else if (lat && lon) {
        url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    } else {
        throw new Error('Either city or coordinates must be provided')
    }

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Failed to fetch weather data')
    }

    return response.json()
}

// Fetch 5-day forecast data
export async function fetchForecastData(city = null, lat = null, lon = null) {
    let url

    if (city) {
        url = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
    } else if (lat && lon) {
        url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    } else {
        throw new Error('Either city or coordinates must be provided')
    }

    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('Failed to fetch forecast data')
    }

    return response.json()
}
