import { useState } from "react";

import sunnyIcon from "/assets/images/icon-sunny.webp";
import stormIcon from "/assets/images/icon-storm.webp";
import snowIcon from "/assets/images/icon-snow.webp";
import rainIcon from "/assets/images/icon-rain.webp";
import partlyCloudyIcon from "/assets/images/icon-partly-cloudy.webp";
import overcastIcon from "/assets/images/icon-overcast.webp";
import fogIcon from "/assets/images/icon-fog.webp";
import drizzleIcon from "/assets/images/icon-drizzle.webp";
import dropDownIcon from "/assets/images/icon-dropdown.svg"; // Tu auras besoin d'une icône flèche ou utilise du texte "v"

const HourlyForecast = ({ weather }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!weather || !weather.hourly) return null;

  const { time, temperature_2m, weather_code } = weather.hourly;
  const days = [];
  for (let i = 0; i < time.length; i += 24) {
    const dateObj = new Date(time[i]);
    const dayName = dateObj.toLocaleDateString("en-US", { weekday: "long" });
    const hours = [];
    for (let j = i; j < i + 24 && j < time.length; j++) {
      hours.push({
        time: time[j],
        temp: Math.round(temperature_2m[j]),
        code: weather_code[j],
      });
    }
    days.push({ name: dayName, hours });
  }

  const getWeatherIcon = (code) => {
    switch (code) {
      case 0:
        return sunnyIcon;
      case 1:
      case 2:
        return partlyCloudyIcon;
      case 3:
        return overcastIcon;
      case 45:
      case 48:
        return fogIcon;
      case 51:
      case 53:
      case 55:
        return drizzleIcon;
      case 61:
      case 63:
      case 65:
        return rainIcon;
      case 71:
      case 73:
      case 75:
        return snowIcon;
      case 95:
      case 96:
      case 99:
        return stormIcon;
      default:
        return sunnyIcon;
    }
  };

  const formatHour = (isoString) => {
    return new Date(isoString).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="rounded-20 col-span-1 h-full w-full bg-neutral-800 p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-preset-4 font-bold text-neutral-200">
          Hourly forecast
        </h3>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-preset-6 rounded-8 flex items-center gap-2 bg-neutral-700 px-4 py-2 text-white transition-colors hover:bg-neutral-600"
          >
            {days[selectedDayIndex]?.name}
            <img
              src={dropDownIcon}
              alt="arrow"
              className={`h-4 w-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <ul className="rounded-12 absolute top-12 right-0 z-10 w-40 overflow-hidden border border-neutral-600 bg-neutral-800 shadow-xl">
              {days.map((day, index) => (
                <li
                  key={day.name}
                  onClick={() => {
                    setSelectedDayIndex(index);
                    setIsDropdownOpen(false);
                  }}
                  className={`text-preset-6 cursor-pointer px-4 py-3 text-white hover:bg-neutral-700 ${
                    selectedDayIndex === index ? "bg-neutral-700 font-bold" : ""
                  }`}
                >
                  {day.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="custom-scrollbar flex max-h-125 flex-col gap-3 overflow-y-auto pr-2">
        {days[selectedDayIndex]?.hours.map((hour, idx) => (
          <div
            key={idx}
            className="rounded-12 flex items-center justify-between bg-neutral-900/50 p-4 transition-colors hover:bg-neutral-700/50"
          >
            <div className="flex items-center gap-4">
              <img
                src={getWeatherIcon(hour.code)}
                alt="weather icon"
                className="h-8 w-8 object-contain"
              />
              <span className="text-preset-5 font-medium text-white">
                {formatHour(hour.time)}
              </span>
            </div>
            <span className="text-preset-3 font-bold text-white">
              {hour.temp}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
