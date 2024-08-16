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
        {dateForHourlyForecast.map((item, index) => {
          return (
            <HourlyForecastItem
              key={index}
              windDeg={item.windDeg}
              weatherState={item.weatherState}
              temp={item.temp}
              unixTime={item.unixTime}
              windSpeed={item.windSpeed}
            />
          );
        })}
      </div>
    </div>
  );
}
