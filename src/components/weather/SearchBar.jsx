
import { Search, MapPin, AlertCircle } from 'lucide-react';
import { useWeather } from '../../hooks/useWeather';


const SearchBar = () => {
    const {
        city,
        setCity,
        handleCitySearch,
        handleLocationSearch,
        locationLoading,
        locationError
    } = useWeather();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCitySearch(city);
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-md mb-6">
            <div className="flex">
                <input
                    type="text"
                    value={city}
                    onChange={handleInputChange}
                    placeholder="Enter city name..."
                    className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white text-gray-200"
                />
                <button
                    type="submit"
                    className="bg-blue-400 text-white px-4 py-3 rounded-none hover:bg-blue-600 transition duration-200 flex items-center"
                >
                    <Search size={18} />
                </button>
                <button
                    type="button"
                    onClick={handleLocationSearch}
                    className="bg-green-500 text-white px-4 py-3 rounded-r-lg hover:bg-green-600 transition duration-200 flex items-center"
                    disabled={locationLoading}
                >
                    <MapPin size={18} />
                </button>
            </div>
            {locationError && (
                <div className="mt-2 text-sm text-orange-600 flex items-center">
                    <AlertCircle size={14} className="mr-1" /> {locationError}
                </div>
            )}
        </form>
    );
};

export default SearchBar;