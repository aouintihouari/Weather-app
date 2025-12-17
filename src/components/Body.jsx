import LocationHeader from "./LocationHeader";
import HourlyForecast from "./HourlyForecast";

const Body = ({ city, weather }) => {
  return (
    <section className="mx-auto mt-8 grid grid-cols-1 gap-6 px-4 lg:grid-cols-3 lg:gap-8 lg:px-40">
      <div className="flex flex-col gap-6 lg:col-span-2">
        <LocationHeader city={city} weather={weather} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-20 h-40 bg-neutral-800 p-4 text-white">
            Details coming soon...
          </div>
          <div className="rounded-20 h-40 bg-neutral-800 p-4 text-white">
            Details coming soon...
          </div>
          <div className="rounded-20 h-40 bg-neutral-800 p-4 text-white">
            Details coming soon...
          </div>
          <div className="rounded-20 h-40 bg-neutral-800 p-4 text-white">
            Details coming soon...
          </div>
        </div>
      </div>
      <div className="h-full lg:col-span-1">
        <HourlyForecast weather={weather} />
      </div>
    </section>
  );
};

export default Body;
