import { useState, useEffect } from "react";

import {
  Header,
  Units,
  SearchBox,
  Results,
  LoadingResults,
  ResearchInput,
  ApiError,
  NoResults,
  Body,
} from "./components";

const App = () => {
  const [showUnits, setShowUnits] = useState(false);
  const [switchUnits, setSwitchUnits] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  const fetchCities = async () => {
    if (query.length < 2) {
      setResults([]);
      setError(false);
      return;
    }
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=fr&format=json`,
      );
      if (!response.ok) throw new Error("API Error");

      const data = await response.json();
      setResults(data.results || []);
      setIsLoading(false);
    } catch (error) {
      console.error("Error during search:", error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(fetchCities, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    fetchWeather(city.latitude, city.longitude);
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <>
      <main
        onClick={showUnits ? () => setShowUnits(false) : null}
        className="font-dm text-neutral-0 relative min-h-screen min-w-screen overflow-x-hidden bg-neutral-900"
      >
        <Header onShowUnits={setShowUnits} />
        {error ? (
          <ApiError onRetry={fetchCities} />
        ) : (
          <>
            <SearchBox
              results={results}
              isLoading={isLoading}
              isOpen={isOpen}
              onIsOpen={setIsOpen}
              query={query}
              onQuery={setQuery}
              onSelectCity={handleSelectCity}
            >
              <ResearchInput
                onIsOpen={setIsOpen}
                query={query}
                onQuery={setQuery}
              />
              <LoadingResults isLoading={isLoading} />
              <Results
                isOpen={isOpen}
                results={results}
                onSelectCity={handleSelectCity}
              />
            </SearchBox>
            <NoResults isLoading={isLoading} query={query} results={results} />
          </>
        )}
        {selectedCity && weatherData && (
          <Body city={selectedCity} weather={weatherData} />
        )}
      </main>
      <Units
        showUnits={showUnits}
        switchUnits={switchUnits}
        onSwitchUnits={setSwitchUnits}
      />
    </>
  );
};

export default App;
