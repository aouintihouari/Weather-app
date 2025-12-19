import {
  formatTemp,
  formatSpeed,
  formatPrecipitation,
} from "../utils/weatherUtils";

const GridCard = ({ label, value, unit }) => (
  <div className="rounded-20 flex h-40 flex-col justify-around gap-2 border-2 border-neutral-600 bg-neutral-800 p-6 text-white shadow-lg">
    <span className="text-preset-6 font-medium tracking-wide text-neutral-200">
      {label}
    </span>
    <span className="text-preset-3 flex items-baseline gap-2">
      <span>{value}</span>
      <span>{unit}</span>
    </span>
  </div>
);

const WeatherGrid = ({ current, isMetric }) => {
  const wind = formatSpeed(current.wind_speed_10m, isMetric).split(" ");
  const precip = formatPrecipitation(current.precipitation, isMetric).split(
    " ",
  );

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
      <GridCard
        label="Feels Like"
        value={formatTemp(current.apparent_temperature, isMetric)}
        unit="°"
      />
      <GridCard
        label="Humidity"
        value={current.relative_humidity_2m}
        unit="%"
      />
      <GridCard label="Wind" value={wind[0]} unit={wind[1]} />
      <GridCard label="Precipitation" value={precip[0]} unit={precip[1]} />
    </div>
  );
};

export default WeatherGrid;
