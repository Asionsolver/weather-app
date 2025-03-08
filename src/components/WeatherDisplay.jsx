
import { formatDate, getWeatherIcon } from "../lib/utils"

function WeatherDisplay({ weatherData }) {
    if (!weatherData) return null

    const {
        name,
        main: { temp, feels_like, humidity, pressure },
        weather,
        wind,
        sys,
        dt,
    } = weatherData

    const weatherDescription = weather[0].description
    const weatherIcon = getWeatherIcon(weather[0].icon)
    const formattedDate = formatDate(dt)
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    return (
        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
                        <p className="text-blue-100">{formattedDate}</p>
                    </div>
                    <div className="flex items-center mt-4 md:mt-0">
                        {weatherIcon}
                        <div className="ml-4">
                            <div className="text-4xl md:text-5xl font-bold">{Math.round(temp)}°C</div>
                            <div className="capitalize">{weatherDescription}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Feels Like</div>
                        <div className="text-xl font-semibold">{Math.round(feels_like)}°C</div>
                    </div>

                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Humidity</div>
                        <div className="text-xl font-semibold">{humidity}%</div>
                    </div>

                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Wind</div>
                        <div className="text-xl font-semibold">{Math.round(wind.speed)} m/s</div>
                    </div>

                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-500">Pressure</div>
                        <div className="text-xl font-semibold">{pressure} hPa</div>
                    </div>
                </div>

                <div className="mt-6 flex justify-between">
                    <div className="text-center">
                        <div className="text-sm text-gray-500">Sunrise</div>
                        <div className="font-medium">{sunrise}</div>
                    </div>

                    <div className="text-center">
                        <div className="text-sm text-gray-500">Sunset</div>
                        <div className="font-medium">{sunset}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay
