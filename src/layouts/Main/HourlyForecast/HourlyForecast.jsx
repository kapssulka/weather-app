import classes from "./HourlyForecast.module.scss";

import { useContext } from "react";
import HourlyForecastItem from "./HourlyForecastItem/HourlyForecastItem";
import { weatherContext } from "../../../App";

import cn from "classnames";
import { useSelector } from "react-redux";

export default function HourlyForecast() {
  const { darkTheme } = useContext(weatherContext);
  const dateForHourlyForecast = useSelector(
    (state) => state.weather.hourlyForecast
  );
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
