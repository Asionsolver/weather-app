import React from "react"
import { formatDay, getWeatherIcon } from "../lib/utils"

function WeatherForecast({ forecastData }) {
    if (!forecastData || !forecastData.list) return null

    // Group forecast data by day
    const groupedForecast = forecastData.list.reduce((acc, item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString()

        if (!acc[date]) {
            acc[date] = []
        }

        acc[date].push(item)
        return acc
    }, {})

    // Get daily forecasts (use the data point closest to noon for each day)
    const dailyForecasts = Object.keys(groupedForecast).map(date => {
        const dayData = groupedForecast[date]

        // Find forecast closest to noon
        let noonForecast = dayData[0]
        let minDiff = Infinity

        dayData.forEach(forecast => {
            const forecastHour = new Date(forecast.dt * 1000).getHours()
            const diff = Math.abs(forecastHour - 12)

            if (diff < minDiff) {
                minDiff = diff
                noonForecast = forecast
            }
        })

        return noonForecast
    }).slice(0, 5) // Limit to 5 days

    return (
        <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
                <h3 className="text-xl font-semibold">5-Day Forecast</h3>
            </div>
            <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {dailyForecasts.map((forecast, index) => {
                        const date = new Date(forecast.dt * 1000)
                        const day = formatDay(date)
                        const icon = getWeatherIcon(forecast.weather[0].icon, "h-8 w-8")
                        const temp = Math.round(forecast.main.temp)
                        const description = forecast.weather[0].description

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="font-medium">{day}</div>
                                <div className="my-2">{icon}</div>
                                <div className="text-xl font-bold">{temp}°C</div>
                                <div className="text-xs text-center capitalize text-gray-500 mt-1">
                                    {description}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WeatherForecast
