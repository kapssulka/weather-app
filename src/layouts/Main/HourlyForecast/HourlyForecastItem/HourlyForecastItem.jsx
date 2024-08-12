import WindIconLeft from "../../../../component/icons/wind/WindIconLeft";
import classes from "./HourlyForecastItem.module.scss";

import SunnyIcon from "/src/component/icons/weather/SunnyIcon";
import RainIcon from "/src/component/icons/weather/SunnyIcon";

export default function HourlyForecastItem({
  weather = "sunny",
  degreesCelsius = "",
  windSpeed = "",
  time = "",
  windDirection = "",
}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.time}>{time}</div>

      {weather === "sunny" && <SunnyIcon />}
      {weather === "rain" && <RainIcon />}

      <div className={classes.degreesCelsius}>{degreesCelsius}</div>

      {windDirection === "left" && <WindIconLeft />}

      <div className={classes.windSpeed}>{windSpeed}</div>
    </div>
  );
}
