import bgTodayDesktop from "/assets/images/bg-today-large.svg";
import bgTodayMobile from "/assets/images/bg-today-small.svg";

import sunnyIcon from "/assets/images/icon-sunny.webp";
import stormIcon from "/assets/images/icon-storm.webp";
import snowIcon from "/assets/images/icon-snow.webp";
import rainIcon from "/assets/images/icon-rain.webp";
import partlyCloudyIcon from "/assets/images/icon-partly-cloudy.webp";
import overcastIcon from "/assets/images/icon-overcast.webp";
import fogIcon from "/assets/images/icon-fog.webp";
import drizzleIcon from "/assets/images/icon-drizzle.webp";

const LocationHeader = ({ city, weather }) => {
  if (!city || !weather) return null;

  const { current } = weather;

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

  return (
    <section
      style={{
        "--bg-image": `url(${window.innerWidth >= 768 ? bgTodayDesktop : bgTodayMobile})`,
      }}
      className="rounded-20 mb-6 flex h-71.5 flex-col items-center justify-center gap-8 overflow-hidden bg-(image:--bg-image) bg-cover bg-center p-8 shadow-lg md:flex-row md:justify-between md:p-12 lg:col-span-2"
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
          {Math.round(current.temperature_2m)}°
        </span>
      </div>
    </section>
  );
};

export default LocationHeader;
