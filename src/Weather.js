// src/Weather.js
import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <h1 className="text-4xl mb-8">Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="mb-4 p-2 rounded"
      />
      <button
        onClick={fetchWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Weather
      </button>
      {weather && (
        <div className="mt-8">
          <h2 className="text-2xl">{weather.name}</h2>
          <p className="text-xl">{weather.main.temp}°C</p>
          <p className="text-xl">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
