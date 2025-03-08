
import { ThermometerSun, Droplets, Wind, Compass, Cloud, Eye } from 'lucide-react';
import { useWeather } from '../../hooks/useWeather';


const WeatherDetails = () => {
    const { weatherData } = useWeather();

    if (!weatherData) return null;

    const details = [
        {
            icon: <ThermometerSun className="text-blue-700" size={24} />,
            value: `${Math.round(weatherData.main.feels_like)}°C`,
            label: 'Feels Like'
        },
        {
            icon: <Droplets className="text-blue-700" size={24} />,
            value: `${weatherData.main.humidity}%`,
            label: 'Humidity'
        },
        {
            icon: <Wind className="text-blue-700" size={24} />,
            value: `${weatherData.wind.speed} m/s`,
            label: 'Wind Speed'
        },
        {
            icon: <Compass className="text-blue-700" size={24} />,
            value: `${weatherData.wind.deg}°`,
            label: 'Wind Direction'
        },
        {
            icon: <Cloud className="text-blue-700" size={24} />,
            value: `${weatherData.clouds.all}%`,
            label: 'Cloudiness'
        }
    ];

    if (weatherData.visibility) {
        details.push({
            icon: <Eye className="text-blue-700" size={24} />,
            value: `${(weatherData.visibility / 1000).toFixed(1)} km`,
            label: 'Visibility'
        });
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {details.map((detail, index) => (
                <div key={index} className="bg-white/50 p-4 rounded-xl text-center">
                    <div className="flex justify-center mb-2 ">
                        {detail.icon}
                    </div>
                    <div className="text-xl font-semibold">{detail.value}</div>
                    <div className="text-gray-800 text-sm">{detail.label}</div>
                </div>
            ))}
        </div>
    );
};

export default WeatherDetails;