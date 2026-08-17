// 17. Weather app — loading, error, and success states
import React, { useState } from "react";

function WeatherApp() {
  const [cityInput, setCityInput] = useState("");

  const [weatherData, setWeatherData] = useState({
    temp: "",
    city: "",
    condition: "",
    humidity: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "27289e4f7b6b61a75f9cba0d8f8e439d";

  const getWeather = async (city) => {
    if (!city.trim()) {
      setError("Please enter a city");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&units=metric&appid=${`27289e4f7b6b61a75f9cba0d8f8e439d`}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeatherData({
        temp: data.main.temp,
        city: data.name,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    getWeather(cityInput);
  };

 return (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
    <div className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-2xl">

      <h1 className="mb-6 text-center text-3xl font-bold text-white">
        Weather App
      </h1>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter city"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          className="flex-1 rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
        />

        <button
          onClick={handleSubmit}
          className="rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-500 active:scale-95"
        >
          Search
        </button>
      </div>

      {loading && (
        <p className="mt-6 text-center text-purple-400">
          Loading weather...
        </p>
      )}

      {error && (
        <p className="mt-6 rounded-xl bg-red-500/10 p-3 text-center text-red-400">
          {error}
        </p>
      )}

      {weatherData.city && !loading && !error && (
        <div className="mt-8 rounded-2xl border border-gray-700 bg-gray-800 p-6 text-center">

          <p className="text-2xl font-bold capitalize text-white">
            {weatherData.city}
          </p>

          <p className="mt-4 text-5xl font-bold text-purple-400">
            {weatherData.temp}°C
          </p>

          <p className="mt-3 text-lg capitalize text-gray-300">
            {weatherData.condition}
          </p>

          <div className="mt-6 border-t border-gray-700 pt-5">
            <p className="text-gray-400">
              Humidity
            </p>

            <p className="mt-1 text-xl font-semibold text-white">
              {weatherData.humidity}%
            </p>
          </div>

        </div>
      )}
    </div>
  </div>
);
}

export default WeatherApp;