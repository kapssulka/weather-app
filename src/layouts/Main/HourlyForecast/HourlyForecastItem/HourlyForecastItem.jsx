import WindIconLeft from "../../../../component/icons/wind/WindIconLeft";
import WeatherState from "../../../../component/WeatherState/WeatherState";
import classes from "./HourlyForecastItem.module.scss";

export default function HourlyForecastItem({
  weatherState = "",
  temp = "",
  windSpeed = "",
  time = "",
  windDeg = "",
}) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.time}>{time}</div>
      <WeatherState size={80} weatherState={weatherState} />

      <div className={classes.temp}>{temp}°C</div>

      {windDeg && <WindIconLeft />}

      <div className={classes.windSpeed}>{windSpeed}km</div>
    </div>
  );
}
