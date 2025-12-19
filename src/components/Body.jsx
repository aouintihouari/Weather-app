import LocationHeader from "./LocationHeader";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import WeatherGrid from "./WeatherGrid";

const Body = ({ city, weather, isMetric }) => {
  return (
    <section className="mx-auto mt-8 grid grid-cols-1 gap-6 px-4 pb-12 lg:grid-cols-3 lg:gap-8 lg:px-40">
      <div className="flex flex-col gap-6 lg:col-span-2">
        <LocationHeader city={city} weather={weather} isMetric={isMetric} />
        <WeatherGrid current={weather.current} isMetric={isMetric} />
        <DailyForecast daily={weather.daily} isMetric={isMetric} />
      </div>
      <div className="h-full lg:col-span-1">
        <HourlyForecast hourly={weather.hourly} isMetric={isMetric} />
      </div>
    </section>
  );
};

export default Body;
