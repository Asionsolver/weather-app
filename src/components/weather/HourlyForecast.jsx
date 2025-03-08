

import { useWeather } from '../../hooks/useWeather';
import { formatTime } from '../../utils/dateUtils';

const HourlyForecast = () => {
    const { forecastData } = useWeather();

    // If no forecast data, return null
    if (!forecastData) return null;

    const hourlyForecasts = forecastData.list.slice(0, 8);

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Hourly Forecast</h2>
            <div className="overflow-x-auto pb-2">
                <div className="flex space-x-4">
                    {hourlyForecasts.map((forecast, index) => (
                        <div key={index} className="flex-shrink-0 w-24 bg-white/50 p-3 rounded-xl text-center">
                            <div className="font-medium text-sm text-gray-700">
                                {formatTime(forecast.dt)}
                            </div>
                            <img
                                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                                alt="Weather icon"
                                className="w-12 h-12 mx-auto"
                            />
                            <div className="text-lg font-semibold">{Math.round(forecast.main.temp)}°</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HourlyForecast;