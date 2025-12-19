import bgTodayDesktop from "/assets/images/bg-today-large.svg";
import bgTodayMobile from "/assets/images/bg-today-small.svg";
import { getWeatherIcon, formatTemp } from "../utils/weatherUtils";

const LocationHeader = ({ city, weather, isMetric }) => {
  if (!city || !weather) return null;

  const { current } = weather;

  return (
    <section
      style={{
        "--bg-image": `url(${window.innerWidth >= 768 ? bgTodayDesktop : bgTodayMobile})`,
      }}
      className="rounded-20 mb-6 flex flex-col items-center justify-center gap-8 overflow-hidden bg-(image:--bg-image) bg-cover bg-center p-8 shadow-lg md:flex-row md:justify-between md:p-12"
    >
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-[28px] font-bold text-white drop-shadow-md">
          {city.name}
          {city.country ? `, ${city.country}` : ""}
        </h2>
        <p className="mt-2 text-[18px] text-neutral-200">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={getWeatherIcon(current.weather_code)}
          alt="weather icon"
          className="h-20 w-20 drop-shadow-lg md:h-32 md:w-32"
        />
        <span className="text-preset-1 font-bold text-white drop-shadow-md md:text-8xl">
          {formatTemp(current.temperature_2m, isMetric)}°
        </span>
      </div>
    </section>
  );
};

export default LocationHeader;
