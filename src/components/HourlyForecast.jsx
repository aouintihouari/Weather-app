import { useState, useMemo } from "react";
import { getWeatherIcon, formatTemp } from "../utils/weatherUtils";
import DayDropdown from "./DayDropdown";

const HourlyForecast = ({ hourly, isMetric }) => {
  const availableDays = useMemo(() => {
    const days = [];
    const seenDates = new Set();

    hourly.time.forEach((t) => {
      const date = new Date(t);
      const dateString = date.toDateString();
      if (!seenDates.has(dateString)) {
        seenDates.add(dateString);
        days.push(date);
      }
    });
    return days;
  }, [hourly.time]);

  const [selectedDay, setSelectedDay] = useState(new Date());

  useMemo(() => {
    if (availableDays.length > 0) {
      const isStillAvailable = availableDays.some(
        (d) => d.toDateString() === selectedDay.toDateString(),
      );
      if (!isStillAvailable) setSelectedDay(availableDays[0]);
    }
  }, [availableDays]);

  const filteredHours = useMemo(() => {
    const currentHour = new Date();

    return hourly.time
      .map((time, index) => ({
        time: new Date(time),
        temp: hourly.temperature_2m[index],
        code: hourly.weather_code[index],
      }))
      .filter((h) => {
        const isSameDay = h.time.toDateString() === selectedDay.toDateString();

        if (
          isSameDay &&
          selectedDay.toDateString() === new Date().toDateString()
        ) {
          return h.time.getHours() >= currentHour.getHours();
        }

        return isSameDay;
      });
  }, [hourly, selectedDay]);

  return (
    <div className="flex h-full max-h-162.5 flex-col rounded-3xl border-2 border-neutral-600 bg-neutral-800 p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-preset-5 text-neutral-0 font-bold">
          Hourly Forecast
        </h3>
        <DayDropdown
          days={availableDays}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />
      </div>
      <div className="custom-scrollbar flex flex-col gap-4 overflow-y-auto px-2">
        {filteredHours.length > 0 ? (
          filteredHours.map((hour, idx) => (
            <div
              key={idx}
              className="rounded-8 flex items-center justify-between border-2 border-neutral-600 bg-neutral-700 px-4 py-4 transition-colors last:border-0"
            >
              <div className="flex items-center gap-5">
                <div className="flex flex-1 justify-center">
                  <img
                    src={getWeatherIcon(hour.code)}
                    alt="icon"
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <span className="text-preset-5-medium text-neutral-0 w-20 font-medium">
                  {hour.time.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    hour12: true,
                  })}
                </span>
              </div>
              <span className="text-neutral-0 text-preset-7 text-right text-lg font-bold">
                {formatTemp(hour.temp, isMetric)}°
              </span>
            </div>
          ))
        ) : (
          <div className="py-10 text-center text-neutral-200">
            No data available for this date.
          </div>
        )}
      </div>
    </div>
  );
};

export default HourlyForecast;
