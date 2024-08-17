import classes from "./HourlyForecast.module.scss";

import { useContext } from "react";
import HourlyForecastItem from "./HourlyForecastItem/HourlyForecastItem";
import { weatherContext } from "../../../App";

import cn from "classnames";

export default function HourlyForecast() {
  const { dateForHourlyForecast, darkTheme } = useContext(weatherContext);

  return (
    <div
      className={cn(classes.wrapper, {
        [classes.dark]: darkTheme,
      })}
    >
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
