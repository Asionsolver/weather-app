import React from 'react';

import { Header, Footer, SearchBar } from './components';
import WeatherContent from './content/WeatherContent';
import { WeatherProvider } from './provider/WeatherProvider';

const App = () => {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 p-4 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-gradient-to-tl from-gray-800 via-blue-700 to-gray-900 rounded-xl shadow-lg p-6 mt-6">
          <Header />
          <SearchBar />
          <WeatherContent />
        </div>
        <Footer />
      </div>
    </WeatherProvider>
  );
};



export default App;