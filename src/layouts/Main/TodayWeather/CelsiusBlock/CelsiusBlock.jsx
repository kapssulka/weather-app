import classes from "./CelsiusBlock.module.scss";

import Sun from "/src/layouts/Main/TodayWeather/Sun/Sun";

export default function CelsiusBlock({ temp, feelsLike, sunrise, sunset }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.degreesCelsius}>{temp}°C</div>
      <div className={classes.feelsLike}>
        <span>Feels like:</span>
        <span>{feelsLike}°C</span>
      </div>

      <Sun time={sunrise} type="sunrise" className={classes.sunrise} />
      <Sun time={sunset} type="sunset" />
    </div>
  );
}
