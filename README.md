# React Weather App

This is a simple weather application built with React that allows users to search for weather information by city name or by using their current location. The app displays current weather conditions, a 5-day forecast, and an hourly forecast. It uses the OpenWeatherMap API to fetch weather data.

## Features

- **Modern React Architecture**: Built with functional components and React Hooks
- **Context API**: Global state management for weather data
- **Custom Hooks**: Reusable hooks for fetching weather data and geolocation
- **API Integration**: Fetches weather data from the OpenWeatherMap API
- **Automatic location tracking**: Fetches weather data from the OpenWeatherMap API
- **Responsive Design**: Created with Tailwind CSS for a mobile-first approach
- **Current Weather Display**: Shows temperature, description, humidity, wind speed, Wind Direction, Cloudiness, and Visibility
- **5-Day Forecast**: Displays upcoming weather predictions
- **Hourly Forecast**: Shows hourly weather conditions for the next 24 hours
- **City Search**: Search for any location globally
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages

## Technologies Used

- React 18+
- React Context API for state management
- Tailwind CSS for styling
- OpenWeatherMap API
- Geolocation API
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later recommended)
- npm or yarn
- OpenWeatherMap API key (free tier available)

### Installation

1. Clone this repository

   ```
   git clone https://github.com/Asionsolver/weather-app.git
   cd weather-app
   ```

2. Install dependencies

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

3. Add your OpenWeatherMap API key
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) if you don't have an account
   - Generate an API key in your account dashboard
   - In the `.env` file, replace the empty API_KEY value with your key:

   ```javascript
   // create a .env file in the root directory
   VITE_OPENWEATHER_API_KEY = your-api-key-here;
   ```

4. Start the development server

   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

5. Open [http://localhost:5173/](http://localhost:5173/) in your browser

### Project Structure

```
weather-app/
├── src/
│   ├── assets/
│   │  
│   ├── components/
│   │   ├── common/
│   │   │   ├── ErrorMessage.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── index.js
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── index.js
│   │   ├── weather/
│   │   │   ├── CurrentWeather.jsx
│   │   │   ├── DailyForecast.jsx
│   │   │   ├── HourlyForecast.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── WeatherDetails.jsx
│   │   │   └── index.js
│   │   └── index.js
│   ├── config/
│   │   └── constants.js
│   ├── content/
│   │   └── WeatherContent.jsx│   
|   ├── context/
│   │   └── WeatherContext.jsx
│   ├── hooks/
│   │   ├── useGeolocation.js
│   │   └── useWeatherApi.js
│   │   └── useWeather.js
│   ├── services/
│   │   └── weatherService.js
│   ├── utils/
│   │   └── dateUtils.js
│   ├── App.jsx
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

### Key Files and Directories

- `src/components/`: Contains reusable UI components.

  - `common/`: Common components like `ErrorMessage` and `LoadingSpinner`.

  - `layout/`: Layout components like `Header` and `Footer`.

  - `weather/`: Weather-related components like `CurrentWeather`, `DailyForecast`, etc.

- `src/config/`: Configuration files like `constants.js`.

- `src/content/`: Main content components like `WeatherContent`.

- `src/context/`: Context API for managing global state.

- `src/hooks/`: Custom hooks like `useGeolocation` and `useWeatherApi`.

- `src/services/`: Service layer for API calls.

- `src/utils/`: Utility functions like `dateUtils`.

And update all temperature displays to show °F instead of °C.

### Project Flow

#### 1. Initialization

- The app initializes and sets up the `WeatherProvider` context.

- The `WeatherProvider` attempts to fetch the user's location using the `useGeolocation` hook.

- If the location is successfully fetched, the app makes an API call to fetch weather data for that location.

- If the location fetch fails, the app defaults to a predefined city (if any).

#### 2. User Interaction

- The user can search for weather information by entering a city name in the `SearchBar`.

- The app makes an API call to fetch weather data for the entered city.

- The user can also fetch weather data for their current location by clicking the location button in the `SearchBar`.

#### 3. Data Display

- The app displays the current weather, weather details, and forecasts (daily and hourly) based on the fetched data.

- If there's an error (e.g., city not found), an error message is displayed.

- A loading spinner is shown while data is being fetched.

#### 4. State Management

- The app uses React Context API (`WeatherContext`) to manage global state (e.g., weather data, loading state, errors).

- Custom hooks (`useWeatherApi`, `useGeolocation`) are used to encapsulate logic for fetching data and managing state.

#### 5. Styling

- The app uses Tailwind CSS for styling.

- Animations and transitions are added for a better user experience.

### Usage

#### 1. Search by City

- Enter a city name in the search bar and press the search button or hit Enter.

#### 2. Search by Location

- Click the location button to fetch weather data for your current location.

#### 3. View Weather Details

- The app displays current weather conditions, a 5-day forecast, and an hourly forecast.
- Additional weather details like humidity, wind speed, and visibility are also shown.

### Data Flow Diagram

```
┌─────────────────┐       ┌───────────────────┐       ┌───────────────────┐
│  User Interface │       │  WeatherProvider  │       │  OpenWeatherMap   │
│   Components    │◄─────►│    (Context)      │◄─────►│        API        │
└─────────────────┘       └───────────────────┘       └───────────────────┘
                                   ▲
                                   │
                          ┌────────┴─────────┐
                          │   Custom Hooks   │
                          │ - useWeather     │
                          │ - useWeatherApi  │
                          │ - useGeolocation │
                          └──────────────────┘
```
