

import { useWeather } from '../../hooks/useWeather';
import { formatDay } from '../../utils/dateUtils';

const DailyForecast = () => {
    const { forecastData } = useWeather();

    if (!forecastData) return null;

    const dailyForecasts = forecastData.list
        .filter((item, index) => index % 8 === 0);

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">5-Day Forecast</h2>
            <div className="overflow-x-auto pb-2">
                <div className="flex space-x-4">
                    {dailyForecasts.map((forecast, index) => (
                        <div key={index} className="flex-shrink-0 w-39 bg-white/50 p-4 rounded-xl text-center">
                            <div className="font-semibold text-gray-700">
                                {formatDay(forecast.dt)}
                            </div>
                            <img
                                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                                alt="Weather icon"
                                className="w-16 h-16 mx-auto"
                            />
                            <div className="flex justify-center space-x-2 text-sm">
                                <span className="font-semibold">{Math.round(forecast.main.temp_max)}°</span>
                                <span className="text-gray-500">{Math.round(forecast.main.temp_min)}°</span>
                            </div>
                            <div className="text-gray-800 text-sm capitalize mt-1">{forecast.weather[0].description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DailyForecast;