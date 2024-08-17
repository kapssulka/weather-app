import classes from "./HourlyForecastItem.module.scss";

import WindIconLeft from "../../../../component/icons/wind/WindIconLeft";
import WeatherState from "../../../../component/WeatherState/WeatherState";

import cn from "classnames";
import { useContext } from "react";
import { weatherContext } from "../../../../App";

export default function HourlyForecastItem({
  weatherState = "",
  temp = "",
  windSpeed = "",
  unixTime = "",
  windDeg = "",
}) {
  const { darkTheme } = useContext(weatherContext);
  return (
    <div
      className={cn(classes.wrapper, {
        [classes.dark]: darkTheme,
      })}
    >
      <div className={classes.time}>{unixTime}</div>
      <WeatherState size={80} weatherState={weatherState} />

      <div className={classes.temp}>{temp}°C</div>

      {windDeg && <WindIconLeft />}

      <div className={classes.windSpeed}>{windSpeed}m/s</div>
    </div>
  );
}
