import { getWeatherIcon, formatTemp } from "../utils/weatherUtils";

const DailyForecast = ({ daily, isMetric }) => {
  const forecastDays = daily.time
    .map((date, index) => ({
      date: new Date(date),
      maxTemp: daily.temperature_2m_max[index],
      minTemp: daily.temperature_2m_min[index],
      code: daily.weather_code[index],
    }))
    .slice(0, 7);

  return (
    <div className="mt-2 flex flex-col gap-4">
      <h3 className="text-preset-5 text-neutral-0 px-2 font-bold">
        Daily Forecast
      </h3>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-7 md:gap-3 lg:gap-6">
        {forecastDays.map((day, idx) => (
          <div
            key={idx}
            className="rounded-20 flex flex-col items-center justify-between gap-4 border-2 border-neutral-600 bg-neutral-800 p-4 shadow-md transition-colors hover:bg-neutral-700"
          >
            <span className="text-preset-600 text-neutral-0 font-medium">
              {day.date.toLocaleDateString("en-US", { weekday: "short" })}
            </span>
            <img
              src={getWeatherIcon(day.code)}
              alt="weather"
              className="h-15 w-15 object-contain"
            />
            <div className="text-preset-7 flex justify-between gap-6 font-bold">
              <span className="text-neutral-0">
                {formatTemp(day.maxTemp, isMetric)}°
              </span>
              <span className="text-neutral-200">
                {formatTemp(day.minTemp, isMetric)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
