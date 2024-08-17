import classes from "./CelsiusBlock.module.scss";

import cn from "classnames";

import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";

import Sun from "/src/layouts/Main/TodayWeather/Sun/Sun";

export default function CelsiusBlock({
  temp,
  feelsLike,
  sunrise,
  sunset,
  darkTheme,
}) {
  return (
    <div className={classes.wrapper}>
      <div
        className={cn(classes.degreesCelsius, {
          [classes.dark]: darkTheme,
        })}
      >
        {temp}°C
      </div>
      <div className={classes.feelsLike}>
        <span>Feels like:</span>
        <span>{feelsLike}°C</span>
      </div>

      <Sun time={sunrise} type="sunrise" className={classes.sunrise}>
        <FiSunrise size={48} color={darkTheme ? "#fff" : "#292929"} />
      </Sun>
      <Sun time={sunset} type="sunset">
        <FiSunset size={48} color={darkTheme ? "#fff" : "#292929"} />
      </Sun>
    </div>
  );
}
