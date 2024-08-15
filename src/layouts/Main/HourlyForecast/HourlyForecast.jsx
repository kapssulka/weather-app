import { useContext } from "react";
import classes from "./HourlyForecast.module.scss";
import HourlyForecastItem from "./HourlyForecastItem/HourlyForecastItem";
import { weatherContext } from "../../../App";

export default function HourlyForecast() {
  const { dateForHourlyForecast } = useContext(weatherContext);

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Hourly Forecast:</h2>

      <div className={classes.itemsWrapper}>
        {dateForHourlyForecast.map((item, index) => (
          <HourlyForecastItem
            key={index}
            windDeg={item.windDeg}
            weatherState={item.weatherState}
            temp={item.temp}
            time="XX:XX"
            windSpeed={item.windSpeed}
          />
        ))}

        {/* <HourlyForecastItem
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
        /> */}
      </div>
    </div>
  );
}
