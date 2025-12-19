import sunnyIcon from "/assets/images/icon-sunny.webp";
import stormIcon from "/assets/images/icon-storm.webp";
import snowIcon from "/assets/images/icon-snow.webp";
import rainIcon from "/assets/images/icon-rain.webp";
import partlyCloudyIcon from "/assets/images/icon-partly-cloudy.webp";
import overcastIcon from "/assets/images/icon-overcast.webp";
import fogIcon from "/assets/images/icon-fog.webp";
import drizzleIcon from "/assets/images/icon-drizzle.webp";

export const getWeatherIcon = (code) => {
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

export const formatTemp = (temp, isMetric) => {
  if (isMetric) return Math.round(temp);
  return Math.round((temp * 9) / 5 + 32);
};

export const formatSpeed = (speed, isMetric) => {
  if (isMetric) return `${Math.round(speed)} km/h`;
  return `${Math.round(speed * 0.621371)} mph`;
};

export const formatPrecipitation = (precip, isMetric) => {
  if (isMetric) return `${precip} mm`;
  return `${(precip * 0.0393701).toFixed(1)} in`;
};
