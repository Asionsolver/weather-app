import { CurrentWeather, DailyForecast, ErrorMessage, HourlyForecast, LoadingSpinner, WeatherDetails } from "../components";
import { useWeather } from "../hooks/useWeather";


const WeatherContent = () => {
    const { weatherLoading, weatherError } = useWeather();

    // Show loading spinner if weather data is loading
    if (weatherError) {
        return <ErrorMessage message={weatherError} />;
    }

    // Show loading spinner if weather data is loading
    if (weatherLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="animate-fadeIn">
            <CurrentWeather />
            <WeatherDetails />
            <DailyForecast />
            <HourlyForecast />
        </div>
    );
};

export default WeatherContent;