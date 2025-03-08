
import { MapPin } from 'lucide-react';

import { formatDate, formatTime } from '../../utils/dateUtils';
import { useWeather } from '../../hooks/useWeather';

const CurrentWeather = () => {
    const { weatherData } = useWeather();

    if (!weatherData) return null;

    return (
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-6 bg-white/50 rounded-xl">
            <div>
                <div className="flex items-center mb-1">
                    <MapPin size={18} className=" mr-2" />
                    <h2 className="text-2xl font-semibold ">
                        {weatherData.name}, {weatherData.sys.country}
                    </h2>
                </div>
                <p className=" mb-4">{formatDate(weatherData.dt)}</p>
                <div className="text-5xl font-bold  mb-2">
                    {Math.round(weatherData.main.temp)}°C
                </div>
                <div className="flex items-center">
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt="Weather icon"
                        className="w-16 h-16"
                    />
                    <span className="text-xl text-gray-800 capitalize">
                        {weatherData.weather[0].description}
                    </span>
                </div>
            </div>

            <div className="mt-6 md:mt-0 text-gray-800">
                <div className="flex items-center mb-2">
                    <div className=" mr-4">
                        <div className="text-sm">Min</div>
                        <div className="text-xl font-medium">{Math.round(weatherData.main.temp_min)}°C</div>
                    </div>
                    <div className="">
                        <div className="text-sm">Max</div>
                        <div className="text-xl font-medium">{Math.round(weatherData.main.temp_max)}°C</div>
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <div className=" mr-4">
                        <div className="text-sm flex items-center">
                            <span className="mr-1">⬆️</span> Sunrise
                        </div>
                        <div className="text-md font-medium">{formatTime(weatherData.sys.sunrise)}</div>
                    </div>
                    <div className="">
                        <div className="text-sm flex items-center">
                            <span className="mr-1">⬇️</span> Sunset
                        </div>
                        <div className="text-md font-medium">{formatTime(weatherData.sys.sunset)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;