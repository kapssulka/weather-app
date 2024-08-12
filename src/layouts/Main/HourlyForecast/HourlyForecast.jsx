import classes from "./HourlyForecast.module.scss";
import HourlyForecastItem from "./HourlyForecastItem/HourlyForecastItem";

export default function HourlyForecast() {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Hourly Forecast:</h2>

      <div className={classes.itemsWrapper}>
        <HourlyForecastItem
          windDirection="left"
          weather="sunny"
          degreesCelsius="26°C"
          time="12:00"
          windSpeed="3km"
        />
        <HourlyForecastItem
          windDirection="left"
          weather="sunny"
          degreesCelsius="32°C"
          time="15:00"
          windSpeed="3km"
        />
        <HourlyForecastItem
          windDirection="left"
          weather="sunny"
          degreesCelsius="28°C"
          time="18:00"
          windSpeed="3km"
        />
        <HourlyForecastItem
          windDirection="left"
          weather="sunny"
          degreesCelsius="23°C"
          time="21:00"
          windSpeed="3km"
        />
        <HourlyForecastItem
          windDirection="left"
          weather="sunny"
          degreesCelsius="18°C"
          time="00:00"
          windSpeed="3km"
        />
      </div>
    </div>
  );
}
